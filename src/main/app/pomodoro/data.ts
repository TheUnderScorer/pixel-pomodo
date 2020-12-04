import { Pomodoro, PomodoroState } from '../../../shared/types';
import { getBoolEnv, getIntEnv } from '../../../shared/env';
import { durations } from './const/durations';

export const getInitialPomodoro = (): Pomodoro => ({
  shortBreakDurationSeconds: getIntEnv(
    'SHORT_BREAK_DURATION_SECONDS',
    durations[1].seconds
  ),
  longBreakDurationSeconds: getIntEnv(
    'LONG_BREAK_DURATION_SECONDS',
    durations[4].seconds
  ),
  remainingSeconds: getIntEnv('WORK_DURATION_SECONDS', durations[6].seconds),
  start: new Date(),
  state: PomodoroState.Work,
  workDurationSeconds: getIntEnv('WORK_DURATION_SECONDS', durations[6].seconds),
  isRunning: false,
  longBreakInterval: getIntEnv('LONG_BREAK_INTERVAL', 4),
  shortBreakCount: 0,
  autoRunWork: getBoolEnv('AUTO_RUN_WORK', false),
  autoRunBreak: getBoolEnv('AUTO_RUN_BREAK', false),
  remainingTime: '',
  remainingPercentage: 0,
  openFullWindowOnBreak: false,
});