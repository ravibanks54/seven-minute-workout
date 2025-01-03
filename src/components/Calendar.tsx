import React from 'react';
import { format, startOfWeek, addDays, isSameDay, startOfDay } from 'date-fns';
import { WorkoutSession } from '../types';
import { CheckCircle } from 'lucide-react';

interface CalendarProps {
  sessions: WorkoutSession[];
}

export const Calendar: React.FC<CalendarProps> = ({ sessions }) => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  const sessionMap = sessions.reduce((map, session) => {
    const sessionDate = startOfDay(new Date(`${session.date}T00:00:00`));
    map[sessionDate.toISOString()] = session;
    return map;
  }, {} as Record<string, WorkoutSession>);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));
  
  const getSessionForDay = (date: Date) => {
    return sessionMap[date.toISOString()] || null;
  };

  const completedThisWeek = weekDays.filter(day => {
    const currentDate = startOfDay(day).toISOString();
    return sessionMap[currentDate];
  }).length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">This Week's Progress</h2>
      <p className="mb-4 text-lg">
        Completed {completedThisWeek}/5 workouts this week
      </p>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => {
          const session = getSessionForDay(day);
          return (
            <div
              key={index}
              className={`p-4 rounded-lg flex flex-col items-center justify-center
                ${session ? 'bg-green-100' : 'bg-gray-50'}`}
            >
              <span className="text-sm text-gray-600">
                {format(day, 'EEE')}
              </span>
              <span className="text-lg font-semibold">
                {format(day, 'd')}
              </span>
              {session && <CheckCircle className="text-green-500 mt-1" size={20} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};