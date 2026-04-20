import React, { useState, type Dispatch, type SetStateAction } from "react";
import assets from "../assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

type NavbarProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  hide?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme, hide }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (hide) return null;

  const navItems = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Struktur Tim", href: "#team" },
    { label: "Program Kerja", href: "#program-kerja" },
    { label: "Dokumentasi", href: "#dokumentasi" },
    { label: "Sosial Media", href: "#sosial-media" },
    { label: "Luaran", href: "#luaran" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 font-medium sticky top-0 z-999 backdrop-blur-xl dark:bg-primary/80 bg-white/50"
    >
      <a href="/" className="flex items-center shrink-0">
        <img
          src={assets.logo_kkn}
          className="w-auto h-15"
          alt="Logo KKN 34 Sidorahayu"
        />
      </a>

      <div
        className={`
            text-primary dark:text-text-invert sm:text-sm
            ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}
            max-sm:fixed top-0 bottom-0 right-0
            max-sm:min-h-screen max-sm:h-full
            max-sm:flex-col max-sm:bg-secondary max-sm:text-white max-sm:pt-20
            flex sm:items-center gap-5 transition-[width]
          `}
      >
        <img
          src={assets.close_icon}
          className="w-5 h-5 absolute top-4 right-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
          alt="Close"
        />

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className=" sm:hover:border-b transition"
            onClick={() => setSidebarOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open menu"
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
