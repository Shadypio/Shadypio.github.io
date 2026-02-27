import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => (
  <button
    onClick={toggle}
    className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </AnimatePresence>
  </button>
);
