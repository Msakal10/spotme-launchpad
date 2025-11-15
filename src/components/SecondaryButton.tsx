import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SecondaryButton = ({ children, onClick, className = "" }: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-12 rounded-xl bg-white border border-border text-foreground font-medium flex items-center justify-center shadow-sm active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
};
