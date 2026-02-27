import { ExternalLink } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { hobbies } from "../data/hobbies";

interface HobbiesProps {
  className?: string;
}

export const Hobbies = ({ className = "" }: HobbiesProps) => (
  <Section id="hobbies" subtitle="Beyond Code" title="Interests & Hobbies" className={className}>
    <div className="grid md:grid-cols-3 gap-6">
      {hobbies.map((hobby, index) => (
        <Card key={hobby.title} delay={index * 0.1} className="flex flex-col h-full">
          <div className="text-zinc-400 dark:text-zinc-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-4 transition-colors">
            {hobby.icon}
          </div>
          <h3 className="text-xl font-serif font-bold mb-3 text-zinc-900 dark:text-zinc-50">{hobby.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 flex-grow">
            {hobby.description}
          </p>
          {hobby.link && (
            <a
              href={hobby.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4 transition-colors"
            >
              {hobby.link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {hobby.details && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {hobby.details.map((detail) => (
                <span 
                  key={detail} 
                  className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-600"
                >
                  {detail}
                </span>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  </Section>
);
