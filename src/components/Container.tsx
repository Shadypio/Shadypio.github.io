import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-5xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);
