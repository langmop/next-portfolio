"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button className="flex justify-center  items-center fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all">
      {theme === "light" ? (
        <BsSun className="text-2xl" onClick={toggleTheme} />
      ) : (
        <BsMoon className="text-2xl" onClick={toggleTheme} />
      )}
    </button>
  );
};

export default ThemeSwitch;
