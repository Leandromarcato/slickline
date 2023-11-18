import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [roles, setRoles] = useState(localStorage.getItem("roles") || []);

  const login = (newToken, newRoles) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);

    setRoles(newRoles);
    localStorage.setItem("roles", newRoles);
  };
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setRoles([]);
    localStorage.removeItem("roles");
  };
console.log(roles)
  return (
    <AuthContext.Provider value={{ token, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
