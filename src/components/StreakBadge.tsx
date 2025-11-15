interface StreakBadgeProps {
  streak: number;
}

export const StreakBadge = ({ streak }: StreakBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-primary" />
      <span className="text-sm font-medium text-foreground">
        {streak === 0 ? "Your streak starts today" : `🔥 ${streak}-day streak`}
      </span>
    </div>
  );
};
