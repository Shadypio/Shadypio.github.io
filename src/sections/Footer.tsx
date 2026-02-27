import { Github, Linkedin } from "lucide-react";
import { Container } from "../components/Container";

interface FooterProps {
  currentYear: number;
}

export const Footer = ({ currentYear }: FooterProps) => (
  <footer className="border-t border-zinc-200 dark:border-zinc-800 py-20 bg-zinc-100/50 dark:bg-zinc-900/50">
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-zinc-900 dark:text-zinc-50">Let's connect.</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Based in Napoli, Italy. Open for collaborations.</p>
        </div>
        <div className="flex gap-6">
          <a 
            href="https://github.com/Shadypio" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-14 h-14 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vincenzopioamendola/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-14 h-14 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; {currentYear} Vincenzopio Amendola</p>
      </div>
    </Container>
  </footer>
);
