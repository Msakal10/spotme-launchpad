interface StreakBadgeProps {
  streak: number;
}

export const StreakBadge = ({ streak }: StreakBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-border px-4 py-1.5 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-primary" />
      <span className="text-sm font-medium text-foreground">
        {streak === 0 ? "Your streak starts today" : `🔥 ${streak}-day streak`}
      </span>
    </div>
  );
};
