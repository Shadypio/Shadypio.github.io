import { ThemeToggle } from "../components/ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => (
  <nav className="fixed top-0 w-full z-50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-8 ml-auto">
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-600 dark:focus-visible:text-primary-400 focus-visible:underline focus-visible:underline-offset-4">About</a>
          <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-600 dark:focus-visible:text-primary-400 focus-visible:underline focus-visible:underline-offset-4">Skills</a>
          <a href="#work" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-600 dark:focus-visible:text-primary-400 focus-visible:underline focus-visible:underline-offset-4">Work</a>
          <a href="#hobbies" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-600 dark:focus-visible:text-primary-400 focus-visible:underline focus-visible:underline-offset-4">Beyond Code</a>
        </div>
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      </div>
    </div>
  </nav>
);
