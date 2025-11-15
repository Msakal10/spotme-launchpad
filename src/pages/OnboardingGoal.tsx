import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { GoalSelector } from "@/components/GoalSelector";

const OnboardingGoal = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState(3);
  const [name, setName] = useState("");

  useEffect(() => {
    // Get name from localStorage
    const storedName = localStorage.getItem("spotme_name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleContinue = () => {
    // Store goal
    localStorage.setItem("spotme_goal", goal.toString());
    navigate("/today");
  };

  const handleSkip = () => {
    // Store default goal
    localStorage.setItem("spotme_goal", "3");
    navigate("/today");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-5 pb-8 pt-10">
      <Header 
        align="left"
        title="Your weekly goal" 
        subtitle="How many days a week do you want to hit the gym?" 
      />

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-md border border-border p-6 flex flex-col items-center">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Commitment
          </div>
          <h2 className="mt-2 text-xl font-bold text-foreground text-center">
            How many days per week can you realistically commit to?
          </h2>
          
          <GoalSelector value={goal} onChange={setGoal} />
          
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Most people start with 3–4 days. You can always adjust later.
          </p>
        </div>
      </div>

      <div>
        {name && (
          <p className="text-xs text-muted-foreground mb-2">
            {name}, this is just for you – no one else sees your goal.
          </p>
        )}
        <div className="space-y-3">
          <PrimaryButton disabled={goal < 1 || goal > 7} onClick={handleContinue}>
            Save goal
          </PrimaryButton>
          <SecondaryButton onClick={handleSkip}>
            I'll decide later
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGoal;
