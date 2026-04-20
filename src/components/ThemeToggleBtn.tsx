import React, { useEffect, type Dispatch, type SetStateAction } from "react";
import assets from "../assets";

type ThemeToggleBtnProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const ThemeToggleBtn: React.FC<ThemeToggleBtnProps> = ({ theme, setTheme }) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="Toggle theme"
        className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
      />
    </button>
  );
};

export default ThemeToggleBtn;
