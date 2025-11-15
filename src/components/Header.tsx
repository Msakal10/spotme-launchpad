interface HeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export const Header = ({ title, subtitle, align = "center" }: HeaderProps) => {
  return (
    <div className={`w-full flex flex-col gap-1 mb-6 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
