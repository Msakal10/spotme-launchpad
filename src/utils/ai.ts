import { Post } from "@/data/types";

export const AI_detectWorkout = (photo: string): string => {
  return "Push Day";
};

export const AI_progressSummary = (posts: Post[]): string => {
  return "You improved your consistency by 17% this month.";
};

export const AI_smartNudge = (userGoal: number, behavior: any): string => {
  return "You're 1 day away from hitting your weekly goal.";
};

export const AI_privacyCheck = (photo: string): boolean => {
  return true; // mock: always okay for now
};
