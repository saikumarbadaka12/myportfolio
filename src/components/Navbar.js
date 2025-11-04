import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Section highlight on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: null, threshold: 0.45 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed z-50 w-full"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-b-xl shadow-md">
        {/* ✅ Updated Title */}
        <a
          href="/"
          className="font-bold text-xl text-indigo-600 dark:text-indigo-400 tracking-wide"
        >
          My Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`px-2 py-1 font-medium transition-all duration-200 ${
                active === i.id
                  ? "text-indigo-500 border-b-2 border-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
              }`}
            >
              {i.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-md border border-gray-400 dark:border-gray-700 hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((o) => !o)}
            className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden max-w-6xl mx-auto px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-b-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  active === i.id
                    ? "text-indigo-500 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {i.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="py-2 border-t border-gray-300 dark:border-gray-700 mt-2"
            >
              {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
