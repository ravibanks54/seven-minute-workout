import { WorkoutSession } from '../types';

const STORAGE_KEY = 'workout_sessions';
const AUTH_KEY = 'workout_auth';

export const getAuthToken = (): string => {
  let token = localStorage.getItem(AUTH_KEY);
  if (!token) {
    token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem(AUTH_KEY, token);
  }
  return token;
};

export const saveWorkoutSession = (date: string) => {
  const sessions = getWorkoutSessions();
  sessions.push({ date, completed: true });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
};

export const getWorkoutSessions = (): WorkoutSession[] => {
  const sessions = localStorage.getItem(STORAGE_KEY);
  return sessions ? JSON.parse(sessions) : [];
};