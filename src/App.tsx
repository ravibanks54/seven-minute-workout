import React, { useState, useEffect } from 'react';
import { Calendar } from './components/Calendar';
import { WorkoutScreen } from './components/WorkoutScreen';
import { DevTools } from './components/DevTools';
import { exercises } from './data/exercises';
import { saveWorkoutSession, getWorkoutSessions, getAuthToken } from './utils/storage';
import { Play, Trophy } from 'lucide-react';

function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [sessions, setSessions] = useState(getWorkoutSessions());

  useEffect(() => {
    // Initialize auth token
    getAuthToken();
  }, []);

  const handleWorkoutComplete = () => {
    const today = new Date().toISOString().split('T')[0];
    saveWorkoutSession(today);
    setSessions(getWorkoutSessions());
    setIsWorking(false);
    setShowCongrats(true);
  };

  if (isWorking) {
    return (
      <>
        <WorkoutScreen exercises={exercises} onComplete={handleWorkoutComplete} />
        <DevTools />
      </>
    );
  }

  if (showCongrats) {
    const today = new Date().toLocaleDateString();

    return (
      <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">{today}</p>
            <p className="text-gray-600 mb-6">
              You've completed your workout for today! Keep up the great work!
            </p>
            <button
              onClick={() => setShowCongrats(false)}
              className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold
                hover:bg-blue-600 transition-colors"
            >
              View Progress
            </button>
          </div>
        </div>
        <DevTools />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">7-Minute Workout Challenge</h1>
            <p className="text-gray-600 mb-6">
              Complete the scientific 7-minute workout 5 times per week to reach your fitness goals.
            </p>
            <button
              onClick={() => setIsWorking(true)}
              className="w-full py-4 px-6 rounded-lg bg-green-500 text-white font-semibold
                hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Play size={24} />
              <span>Start Workout</span>
            </button>
          </div>

          <Calendar sessions={sessions} />
        </div>
      </div>
      <DevTools />
    </>
  );
}

export default App;