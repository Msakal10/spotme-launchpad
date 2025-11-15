import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PrimaryButton = ({ children, onClick, className = "" }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-medium flex items-center justify-center shadow-md active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
};
