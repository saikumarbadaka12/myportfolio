import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  // Light / dark persisted class on <html>
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden transition-colors duration-500">
      {/* 🔹 Scroll progress bar at the very top */}
      <ScrollIndicator />

      {/* 🔹 Navigation bar */}
      <Navbar />

      {/* 🔹 Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* 🔹 Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} <span className="font-semibold">Sai Kumar Badaka</span> — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
