import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { StreakBadge } from "@/components/StreakBadge";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to next onboarding screen (to be created)
    console.log("Navigate to name/username setup");
    // navigate("/onboarding/details");
  };

  const handleLogin = () => {
    console.log("Go to login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-5 pt-10 pb-6 flex-1 flex flex-col">
        <Header title="SpotMe" subtitle="Your gym accountability crew." />

        {/* Hero Block */}
        <div className="mt-4 mb-6 space-y-3 text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
            SpotMe
          </h2>
          <p className="text-base text-foreground font-medium">Show up. Get spotted.</p>
          <p className="text-sm text-muted-foreground">
            Post a gym pic to unlock your crew and keep your streak alive.
          </p>
        </div>

        {/* Why SpotMe Card */}
        <div className="bg-white rounded-2xl shadow-md border border-border p-5 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Why it works
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm text-foreground">Post to unlock your friends' workouts.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm text-foreground">Keep your streak and never fall behind.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm text-foreground">
                Turn the gym into a social habit, not a lonely grind.
              </p>
            </div>
          </div>
        </div>

        {/* Streak Preview */}
        <div className="mt-4 flex flex-col items-center">
          <StreakBadge streak={0} />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            You haven't started your streak yet — your Day 1 starts now.
          </p>
        </div>

        {/* AI Nudge Preview */}
        <div className="mt-3 text-xs text-muted-foreground/70 text-center">
          AI Smart Nudge: We'll gently remind you when you're close to your weekly goal. No
          pressure, just support.
        </div>

        {/* Bottom Buttons */}
        <div className="mt-auto pt-4 space-y-3">
          <PrimaryButton onClick={handleGetStarted}>Let's get it 💪</PrimaryButton>
          <SecondaryButton onClick={handleLogin}>I already have an account</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
