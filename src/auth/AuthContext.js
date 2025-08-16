// frontend/src/auth/AuthContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    api.me().then(d => {
      if (mounted) setUser(d.user);
    }).catch(() => {}).finally(() => setReady(true));
    return () => { mounted = false; };
  }, []);

  const login = async ({ username, password }) => {
    const data = await api.login({ username, password });
    setUser(data.user);
    return data.user;
  };

  const signup = async ({ username, email, password, first_name, last_name }) => {
    const data = await api.signup({ username, email, password, first_name, last_name });
    setUser(data.user);
    return data.user;
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  const refreshMe = async () => {
    const data = await api.me();
    setUser(data.user);
  };

  const value = useMemo(() => ({
    user,
    isAuthed: !!user,
    ready,
    login,
    signup,
    logout,
    refreshMe,
  }), [user, ready]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
