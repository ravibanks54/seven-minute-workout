export interface Exercise {
  name: string;
  description: string;
  duration: number;
  break: number;
}

export interface WorkoutSession {
  date: string;
  completed: boolean;
}