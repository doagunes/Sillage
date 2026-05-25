const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const db = new sqlite3.Database("./sillage.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS memories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      title TEXT,
      memoryText TEXT,
      topNotes TEXT,
      heartNotes TEXT,
      baseNotes TEXT,
      memoryImage TEXT,
      perfumeImage TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  const normalizedEmail = email.trim().toLowerCase();

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters and include both letters and numbers.",
    });
  }

  db.run(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username.trim(), normalizedEmail, password],
    function (err) {
      if (err) {
        return res.status(409).json({
          message: "An account with this email already exists.",
        });
      }

      res.json({
        id: this.lastID,
        username: username.trim(),
        email: normalizedEmail,
      });
    }
  );
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();

  db.get(
    `SELECT * FROM users WHERE email = ?`,
    [normalizedEmail],
    (err, user) => {
      if (!user) {
        return res.status(404).json({
          message: "No account found with this email.",
        });
      }

      if (user.password !== password) {
        return res.status(401).json({
          message: "Incorrect password.",
        });
      }

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
      });
    }
  );
});

app.get("/api/memories", (req, res) => {
  db.all(
    `SELECT * FROM memories ORDER BY createdAt DESC`,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "Database error." });
      }

      res.json(rows);
    }
  );
});

app.get("/api/memories/user/:userId", (req, res) => {
  db.all(
    `SELECT * FROM memories WHERE userId = ? ORDER BY createdAt DESC`,
    [req.params.userId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "Database error." });
      }

      res.json(rows);
    }
  );
});


app.post("/api/memories", upload.single("memoryImage"), (req, res) => {
  const {
    userId,
    title,
    memoryText,
    topNotes,
    heartNotes,
    baseNotes,
  } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User is required." });
  }

  const memoryImage = req.file
    ? `http://localhost:${PORT}/uploads/${req.file.filename}`
    : null;

  db.run(
    `
    INSERT INTO memories 
    (userId, title, memoryText, topNotes, heartNotes, baseNotes, memoryImage, perfumeImage)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      userId,
      title,
      memoryText,
      topNotes,
      heartNotes,
      baseNotes,
      memoryImage,
      memoryImage,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Could not save memory." });
      }

      res.json({
        id: this.lastID,
        userId,
        title,
        memoryText,
        topNotes,
        heartNotes,
        baseNotes,
        memoryImage,
        perfumeImage: memoryImage,
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Sillage backend running on http://localhost:${PORT}`);
});