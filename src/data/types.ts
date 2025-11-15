export type User = {
  id: string;
  name: string;
  username: string;
  gymGoalPerWeek: number;
  streak: number;
  postedToday: boolean;
  preferredTimeSlot: "early-morning" | "morning" | "afternoon" | "evening" | "varies";
  mainGoal: "build-muscle" | "lose-fat" | "stay-consistent" | "get-stronger" | "feel-better";
  workoutTypes: string[];
};

export type Post = {
  id: string;
  userId: string;
  photoUrl: string;
  timestamp: string;
};

export type Friend = {
  id: string;
  name: string;
  photo: string;
  streak: number;
  lastWorkoutTime: string;
};
