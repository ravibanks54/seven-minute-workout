// Exercise duration configuration
export const EXERCISE_CONFIG = {
  // Use test durations based on environment variable
  testing: import.meta.env.VITE_USE_TEST_DURATIONS === 'true',
  
  // Duration in seconds
  durations: {
    production: {
      exercise: 30,
      break: 10
    },
    testing: {
      exercise: 5,
      break: 2
    }
  }
};