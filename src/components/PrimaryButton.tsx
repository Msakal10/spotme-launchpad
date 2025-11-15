import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({ children, onClick, className = "", disabled = false }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-accent text-white font-medium flex items-center justify-center shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition ${className}`}
    >
      {children}
    </button>
  );
};
