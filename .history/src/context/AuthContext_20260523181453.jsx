import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("sillageUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (userData) => {
    const newUser = {
      id: Date.now(),
      username: userData.username,
      email: userData.email,
    };

    localStorage.setItem("sillageUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email) => {
    const loggedUser = {
      id: Date.now(),
      username: "Sillage User",
      email,
    };

    localStorage.setItem("sillageUser", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };

  const logout = () => {
    localStorage.removeItem("sillageUser");
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