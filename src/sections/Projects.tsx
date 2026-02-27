import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "../components/Section";
import { projects } from "../data/projects";

export const Projects = () => (
  <Section id="work" subtitle="Recent Work" title="Featured Projects">
    <div className="grid md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-2 bg-zinc-200 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700">
            <img
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shadow-xl hover:bg-primary-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-label={`Open ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-zinc-900 dark:text-zinc-50">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-primary-500">
              {project.title}
            </a>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.description}</p>
        </motion.article>
      ))}
    </div>
    <div className="mt-16 text-center">
      <a 
        href="https://github.com/Shadypio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-primary-500"
      >
        Full Portfolio on GitHub <Github className="w-4 h-4" />
      </a>
    </div>
  </Section>
);
