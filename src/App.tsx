/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Hobbies } from "./sections/Hobbies";
import { Footer } from "./sections/Footer";

export default function App() {
  // Theme state management
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Constants
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthday = new Date(2000, 4, 22); // May 22, 2000 (month is 0-indexed)
  const hadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  const age = currentYear - birthday.getFullYear() - (hadBirthdayThisYear ? 0 : 1);

  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900 dark:selection:bg-primary-900 dark:selection:text-primary-100 transition-colors duration-200">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero age={age} />
        <Skills className="bg-zinc-100/50 dark:bg-zinc-900/40" />
        <Projects />
        <Hobbies className="bg-zinc-100/50 dark:bg-zinc-900/40" />
      </main>

      <Footer currentYear={currentYear} />
    </div>
  );
}
