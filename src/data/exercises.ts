import { EXERCISE_CONFIG } from '../config/exercise-config';
import { Exercise } from '../types';

const { testing, durations } = EXERCISE_CONFIG;
const { exercise: exerciseDuration, break: breakDuration } = testing ? durations.testing : durations.production;

export const exercises: Exercise[] = [
  {
    name: "Jumping Jacks",
    description: "Total body exercise that combines jumping with arm movements",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_1.jpg"
  },
  {
    name: "Wall Sit",
    description: "Lower body exercise holding a sitting position against a wall",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_2.jpg"
  },
  {
    name: "Push-ups",
    description: "Upper body exercise pushing up and down from the ground",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_3.jpg"
  },
  {
    name: "Abdominal Crunches",
    description: "Core exercise lifting shoulders off the ground",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_4.jpg"
  },
  {
    name: "Step-ups",
    description: "Stepping up and down on a chair",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_5.jpg"
  },
  {
    name: "Squats",
    description: "Lower body exercise bending knees and hips",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_6.jpg"
  },
  {
    name: "Tricep Dips",
    description: "Upper body exercise using a chair",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_7.jpg"
  },
  {
    name: "Plank",
    description: "Core exercise holding a push-up position",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_8.jpg"
  },
  {
    name: "High Knees",
    description: "Running in place lifting knees high",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_9.jpg"
  },
  {
    name: "Lunges",
    description: "Lower body exercise stepping forward into a lunge",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_10.jpg"
  },
  {
    name: "Push-ups with Rotation",
    description: "Push-ups with a rotation to the side at the top",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_11.jpg"
  },
  {
    name: "Side Plank",
    description: "Core exercise holding a side plank position",
    duration: exerciseDuration,
    break: breakDuration,
    image: "/src/assets/images/exercise_12.jpg"
  }
];