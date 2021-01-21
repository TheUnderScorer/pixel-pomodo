import { PomodoroService } from '../../main/app/pomodoro/services/pomodoroService/PomodoroService';

export interface Pomodoro {
  start: Date;
  state: PomodoroState;
  workDurationSeconds: number;
  shortBreakDurationSeconds: number;
  longBreakDurationSeconds: number;
  longBreakInterval: number;
  shortBreakCount: number;
  remainingSeconds: number;
  isRunning: boolean;
  autoRunBreak: boolean;
  autoRunWork: boolean;
  remainingTime: string;
  remainingPercentage: number;
  openFullWindowOnBreak: boolean;
}

export enum PomodoroState {
  Work = 'Work',
  Break = 'Break',
  LongBreak = 'LongBreak',
}

export enum PomodoroOperations {
  Update = 'Update',
  GetState = 'GetState',
  ToggleTimerMenu = 'ToggleTimerMenu',
  RestartCurrentState = 'RestartCurrentState',
  MoveToNextState = 'MoveToNextState',
}

export enum PomodoroSubscriptionTopics {
  Updated = 'Updated',
}

export interface PomodoroSettings
  extends Pick<
    Pomodoro,
    | 'longBreakInterval'
    | 'openFullWindowOnBreak'
    | 'autoRunBreak'
    | 'autoRunWork'
    | 'workDurationSeconds'
    | 'longBreakDurationSeconds'
    | 'shortBreakDurationSeconds'
  > {}

export interface ToggleMenuPayload {
  y: number;
  x: number;
}

export interface PomodoroStateChanged {
  newState: PomodoroState;
  oldState: PomodoroState;
  pomodoro: PomodoroService;
  trigger: Trigger;
}

export enum Trigger {
  Manual = 'Manual',
  Scheduled = 'Scheduled',
}
