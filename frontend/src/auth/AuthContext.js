// frontend/src/auth/AuthContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const TOKEN_KEY = "authToken";
  const USER_KEY = "authUser";

  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || null);
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(USER_KEY) || "null"); }
    catch { return null; }
  });

  const isAuthed = !!token;

  const login = (newToken, newUser = null) => {
    try {
      localStorage.setItem(TOKEN_KEY, newToken);
      if (newUser) localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    } catch {}
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } catch {}
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === TOKEN_KEY) setToken(e.newValue);
      if (e.key === USER_KEY) {
        try { setUser(JSON.parse(e.newValue)); } catch { setUser(null); }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(() => ({ isAuthed, user, token, login, logout }), [isAuthed, user, token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
