import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  useEffect(() => {
    try {
      localStorage.removeItem('bizwoke_theme');
      const root = document.documentElement;
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    } catch (e) {
      // ignore
    }
  }, []);

  const theme = 'light';
  const isDark = false;
  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, setTheme: () => {}, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: 'light', isDark: false, toggleTheme: () => {} };
  }
  return context;
}
