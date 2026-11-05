import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../utils/api';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('bizwoke_admin_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('bizwoke_admin_token') || null;
  });

  const [isLoading, setIsLoading] = useState(true);

  // Verify token on mount
  useEffect(() => {
    async function verify() {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(API_ENDPOINTS.adminVerify, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.authenticated) {
          setIsLoading(false);
        } else {
          logout();
        }
      } catch {
        // If backend is waking up or network error, retain local session if token exists
        setIsLoading(false);
      }
    }

    verify();
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await fetch(API_ENDPOINTS.adminLogin, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid credentials');
      }

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('bizwoke_admin_token', data.token);
      localStorage.setItem('bizwoke_admin_user', JSON.stringify(data.user));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('bizwoke_admin_token');
    localStorage.removeItem('bizwoke_admin_user');
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}

