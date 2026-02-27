import { ReactNode, FC } from "react";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`py-24 ${className}`}>
    <Container>
      {(title || subtitle) && (
        <div className="flex items-center gap-4 mb-12">
          <div className="flex flex-col">
            {subtitle && (
              <span className="text-sm font-bold uppercase tracking-widest text-primary-700 dark:text-primary-400 mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-50">
                {title}
              </h2>
            )}
          </div>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700 self-end mb-2" />
        </div>
      )}
      {children}
    </Container>
  </section>
);
