"use client";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContectProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
} | null;

export const ThemeContext = React.createContext<ThemeContextType>(null);

const ThemeContextProvider = ({ children }: ThemeContectProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme") as Theme | null;
    if (currentTheme) {
      if (currentTheme == "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setTheme(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}

export default ThemeContextProvider;
