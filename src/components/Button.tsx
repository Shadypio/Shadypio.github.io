import { ReactNode, FC } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  target,
  rel
}) => {
  const baseStyles = "px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950";

  const variants = {
    primary: "bg-zinc-900 dark:bg-primary-600 text-white dark:text-white hover:bg-primary-700 dark:hover:bg-primary-500 shadow-lg shadow-zinc-300/50 dark:shadow-primary-900/30",
    secondary: "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-600",
    outline: "border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 hover:border-zinc-900 dark:hover:border-zinc-100"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
