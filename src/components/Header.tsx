interface HeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onBack?: () => void;
}

export const Header = ({ title, subtitle, align = "center", onBack }: HeaderProps) => {
  if (onBack) {
    return (
      <div className="w-full mb-6">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border bg-white text-foreground hover:bg-gray-50 transition"
          >
            ←
          </button>
        </div>
        <div className={`flex flex-col gap-1 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col gap-1 mb-6 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
