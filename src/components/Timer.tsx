import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
  isBreak?: boolean;
  isPaused: boolean;
}

export const Timer: React.FC<TimerProps> = ({ duration, onComplete, isBreak, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer whenever duration or break status changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, isBreak]);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          onComplete();
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete, isPaused, isBreak]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <TimerIcon className={isBreak ? "text-blue-500" : "text-green-500"} />
      <span className="text-4xl font-bold">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </span>
    </div>
  );
};