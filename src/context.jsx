import { createContext, useContext, useState, useEffect } from "react";

// 建立一個名為 AppContext 的上下文（context）
const AppContext = createContext();

const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-schema:dark)"
  ).matches;
  // console.log(preferDarkMode);
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return preferDarkMode || storedDarkMode;
};

// 定義一個 AppProvider 組件作為上下文的提供者
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 定義一個自定義的 hooks 函式 useGlobalContext 用於使用上下文
export const useGlobalContext = () => useContext(AppContext);
