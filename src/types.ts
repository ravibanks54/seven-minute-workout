export interface Exercise {
  name: string;
  description: string;
  duration: number;
  break: number;
  image: string;
}

export interface WorkoutSession {
  date: string;
  completed: boolean;
}