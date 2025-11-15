export type User = {
  id: string;
  name: string;
  username: string;
  gymGoalPerWeek: number;
  streak: number;
  postedToday: boolean;
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
