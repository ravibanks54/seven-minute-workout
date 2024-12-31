import { EXERCISE_CONFIG } from '../config/exercise-config';

const { testing, durations } = EXERCISE_CONFIG;
const { exercise: exerciseDuration, break: breakDuration } = testing ? durations.testing : durations.production;

export const exercises = [
  {
    name: "Jumping Jacks",
    description: "Total body exercise that combines jumping with arm movements",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Wall Sit",
    description: "Lower body exercise holding a sitting position against a wall",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Push-ups",
    description: "Upper body exercise pushing up and down from the ground",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Abdominal Crunches",
    description: "Core exercise lifting shoulders off the ground",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Step-ups",
    description: "Stepping up and down on a chair",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Squats",
    description: "Lower body exercise bending knees and hips",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Tricep Dips",
    description: "Upper body exercise using a chair",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Plank",
    description: "Core exercise holding a push-up position",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "High Knees",
    description: "Running in place lifting knees high",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Lunges",
    description: "Lower body exercise stepping forward into a lunge",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Push-ups with Rotation",
    description: "Push-ups with a rotation to the side at the top",
    duration: exerciseDuration,
    break: breakDuration
  },
  {
    name: "Side Plank",
    description: "Core exercise holding a side plank position",
    duration: exerciseDuration,
    break: breakDuration
  }
];