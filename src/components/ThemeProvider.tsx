
import React, { useContext, useEffect, useState } from "react"
import type { Theme, ThemeProviderState } from "./ThemeProviderContext"
import { ThemeProviderContext, initialState } from "./ThemeProviderContext"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  const value = {
    theme: "dark" as Theme,
    setTheme: () => {},
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// useTheme has been moved to use-theme.ts
