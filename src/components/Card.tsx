import { ReactNode, FC } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card: FC<CardProps> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`p-6 bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all group ${className}`}
  >
    {children}
  </motion.div>
);
