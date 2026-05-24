import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const API_URL = "http://localhost:5001/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("sillageCurrentUser");

    if (savedCurrentUser) {
      setUser(JSON.parse(savedCurrentUser));
    }
  }, []);

  const signup = async ({ username, email, password }) => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Signup failed.",
        };
      }

      localStorage.setItem("sillageCurrentUser", JSON.stringify(data));
      setUser(data);

      return {
        success: true,
        user: data,
      };
    } catch (error) {
      return {
        success: false,
        message: "Could not connect to the server.",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Login failed.",
        };
      }

      localStorage.setItem("sillageCurrentUser", JSON.stringify(data));
      setUser(data);

      return {
        success: true,
        user: data,
      };
    } catch (error) {
      return {
        success: false,
        message: "Could not connect to the server.",
      };
    }
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