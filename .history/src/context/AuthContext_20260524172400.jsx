import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("sillageCurrentUser");

    if (savedCurrentUser) {
      setUser(JSON.parse(savedCurrentUser));
    }
  }, []);

  const getUsers = () => {
    const savedUsers = localStorage.getItem("sillageUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("sillageUsers", JSON.stringify(users));
  };

  const isPasswordValid = (password) => {
    const hasMinimumLength = password.length >= 8;
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasMinimumLength && hasLetter && hasNumber;
  };

  const signup = ({ username, email, password }) => {
    const users = getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    if (!username.trim()) {
      return {
        success: false,
        message: "Please enter a user name.",
      };
    }

    if (!normalizedEmail) {
      return {
        success: false,
        message: "Please enter an email address.",
      };
    }

    if (!isPasswordValid(password)) {
      return {
        success: false,
        message: "Password must be at least 8 characters and include both letters and numbers.",
      };
    }

    const existingUser = users.find(
      (user) => user.email === normalizedEmail
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists. Please log in instead.",
      };
    }

    const newUser = {
      id: Date.now(),
      username: username.trim(),
      email: normalizedEmail,
      password,
    };

    const updatedUsers = [...users, newUser];

    saveUsers(updatedUsers);

    const currentUser = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    localStorage.setItem("sillageCurrentUser", JSON.stringify(currentUser));
    setUser(currentUser);

    return {
      success: true,
      user: currentUser,
    };
  };

  const login = (email, password) => {
    const users = getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find(
      (user) => user.email === normalizedEmail
    );

    if (!existingUser) {
      return {
        success: false,
        message: "No account found with this email. Please sign up first.",
      };
    }

    if (existingUser.password !== password) {
      return {
        success: false,
        message: "Incorrect password. Please try again.",
      };
    }

    const currentUser = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
    };

    localStorage.setItem("sillageCurrentUser", JSON.stringify(currentUser));
    setUser(currentUser);

    return {
      success: true,
      user: currentUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("sillageCurrentUser");
    setUser(null);
  };

  const isLoggedIn = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}