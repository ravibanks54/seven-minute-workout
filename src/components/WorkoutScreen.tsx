import React, { useState } from 'react';
import { Timer } from './Timer';
import { Exercise } from '../types';
import { Play, Pause } from 'lucide-react';

interface WorkoutScreenProps {
  exercises: Exercise[];
  onComplete: () => void;
}

export const WorkoutScreen: React.FC<WorkoutScreenProps> = ({ exercises, onComplete }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleTimerComplete = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (isBreak) {
      // After break, move to next exercise
      if (currentExerciseIndex === exercises.length - 1) {
        onComplete();
      } else {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setIsBreak(false);
      }
    } else {
      // After exercise, start break
      setIsBreak(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <img 
          src={currentExercise.image} 
          alt={currentExercise.name} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-4 text-center">
          {isBreak ? "Break Time!" : currentExercise.name}
        </h2>
        
        <p className="text-gray-600 mb-6 text-center">
          {isBreak ? "Get ready for the next exercise" : currentExercise.description}
        </p>

        <div className="mb-6">
          <Timer
            duration={isBreak ? currentExercise.break : currentExercise.duration}
            onComplete={handleTimerComplete}
            isBreak={isBreak}
            isPaused={isPaused}
          />
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold
            hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
        >
          {isPaused ? (
            <>
              <Play size={20} />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause size={20} />
              <span>Pause</span>
            </>
          )}
        </button>

        <div className="mt-6">
          <p className="text-sm text-gray-500 text-center">
            Exercise {currentExerciseIndex + 1} of {exercises.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 rounded-full h-2"
              style={{
                width: `${((currentExerciseIndex + 1) / exercises.length) * 100}%`
              }}
            />
          </div>
        </div>

        <audio ref={audioRef} src="/src/assets/sounds/timer-end.mp3" preload="auto" />
      </div>
    </div>
  );
};