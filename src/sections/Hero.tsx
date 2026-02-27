import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

interface HeroProps {
  age: number;
}

export const Hero = ({ age }: HeroProps) => (
  <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-24">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8 md:gap-12">
          {/* Image — shown first on mobile (order-first), moves to right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative order-first md:order-last shrink-0"
          >
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl dark:shadow-zinc-950/80 dark:ring-1 dark:ring-zinc-700">
              <img
                src="images/foto_mia.jpg"
                alt="Vincenzopio Amendola"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text content */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-zinc-900 dark:text-zinc-50">
              I am <span className="relative inline-block group/tip cursor-help">
                <span>Vincenzopio</span>
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 sm:w-80 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-sans font-normal not-italic px-4 py-3 leading-relaxed shadow-xl opacity-0 group-hover/tip:opacity-100 focus-within:opacity-100 transition-opacity duration-200 z-50 text-center">
                  I know, weird name: it's supposed to be a combination of Vincenzo and Pio, two more traditional ones :D
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-zinc-900 dark:bg-zinc-100" />
                </span>
              </span>, <br />
              <span className="text-primary-600 dark:text-primary-400 italic">Frontend Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
              A {age} year old guy based in Napoli, Italy. Currently working at{" "}
              <a 
                href="https://www.edreamsodigeo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 font-medium underline decoration-primary-600/30 hover:decoration-primary-600 dark:decoration-primary-400/30 dark:hover:decoration-primary-400 transition-all"
              >
                eDreams ODIGEO
              </a>.
              Computer Science enthusiast, constantly seeking challenges to enhance my skills.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <Button href="#work">
                View My Work
              </Button>
              <Button
                href="/assets/ENG_Amendola_Vincenzopio_CV.pdf"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Resume (EN)
              </Button>
              <Button
                href="/assets/ITA_Amendola_Vincenzopio_CV.pdf"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Resume (IT)
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  </section>
);
