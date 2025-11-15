import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/PrimaryButton";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  const gymImages = [
    "/images/gym-1.jpg",
    "/images/gym-2.jpg",
    "/images/gym-3.jpg",
    "/images/gym-4.jpg",
    "/images/gym-5.jpg",
    "/images/gym-6.jpg",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Grid of Gym Photos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-1 opacity-60">
          {gymImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          ))}
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-5 pb-8 pt-10">
        {/* Header - Dark Mode */}
        <div className="w-full flex flex-col gap-1 mb-6 items-center text-center">
          <h1 className="text-xl font-semibold text-white">SpotMe</h1>
          <p className="text-sm text-gray-300">Your gym accountability crew.</p>
        </div>

        {/* Hero Section - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-4xl font-extrabold text-white">
            SpotMe
          </h2>
          <p className="text-base font-semibold text-white">Show up. Get spotted.</p>
          <p className="text-sm text-gray-300 max-w-xs">
            Post a gym pic to unlock your crew and keep your streak alive.
          </p>
          
          {/* Dark Mode Streak Badge */}
          <div className="mt-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#5D5FEC]" />
              <span className="text-sm font-medium text-gray-100">
                Your streak starts today
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 space-y-3">
          <PrimaryButton onClick={() => navigate("/onboarding/details")}>
            Let's get it 💪
          </PrimaryButton>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 rounded-2xl bg-transparent border border-white/30 text-white font-medium flex items-center justify-center active:scale-95 transition"
          >
            I already have an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
