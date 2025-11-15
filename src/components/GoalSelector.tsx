interface GoalSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export const GoalSelector = ({ value, onChange }: GoalSelectorProps) => {
  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="text-5xl font-extrabold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">days per week</div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onChange(day)}
            className={`px-4 py-1.5 rounded-full text-sm cursor-pointer transition ${
              value === day
                ? "bg-gradient-to-r from-primary to-primary-accent text-white border-transparent"
                : "bg-white border border-border text-foreground"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};
