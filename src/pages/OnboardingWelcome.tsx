import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { StreakBadge } from "@/components/StreakBadge";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/onboarding/details");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="/images/gym-1.jpg"
          alt=""
          className="w-full h-full object-cover grayscale opacity-30 blur-sm"
        />
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/90" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-5 pb-8 pt-10">
        <Header title="SpotMe" subtitle="Your gym accountability crew." />

        {/* Hero Section - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-4xl font-extrabold text-foreground">
            SpotMe
          </h2>
          <p className="text-base font-semibold text-foreground">Show up. Get spotted.</p>
          <p className="text-sm text-gray-500 max-w-xs">
            Post a gym pic to unlock your crew and keep your streak alive.
          </p>
          
          <div className="mt-3">
            <StreakBadge streak={0} />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 space-y-3">
          <PrimaryButton onClick={handleGetStarted}>Let's get it 💪</PrimaryButton>
          <SecondaryButton onClick={handleLogin}>I already have an account</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
