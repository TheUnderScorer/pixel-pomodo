import { PomodoroService } from './PomodoroService';
import { createMockProxy } from 'jest-mock-proxy';
import { PomodoroStateEnum } from '../../../../../shared/types';
import { wait } from '../../../../../shared/utils/timeout';
import { createMockSettings } from '../../../../../tests/mocks/settings';
import ElectronStore from 'electron-store';
import { AppStore } from '../../../../../shared/types/store';

describe('PomodoroService', () => {
  let service: PomodoroService;

  const mockStore = createMockProxy<ElectronStore<AppStore>>();
  const mockSettings = createMockSettings();

  beforeEach(() => {
    mockStore.mockClear();

    if (service) {
      service.stop();
    }

    service = new PomodoroService(mockStore, mockSettings as any);

    service.fill({
      remainingSeconds: 1,
    });
  });

  it('should return correct time', () => {
    jest.useFakeTimers();

    expect(service.remainingTime).toMatchInlineSnapshot(`"00:01"`);
  });

  it('should stop timer after work if auto run is set to false', async () => {
    jest.useFakeTimers();

    mockSettings.pomodoroSettings.autoRunBreak = false;
    mockSettings.pomodoroSettings.autoRunWork = false;
    mockSettings.pomodoroSettings.workDurationSeconds = 1;
    mockSettings.pomodoroSettings.shortBreakDurationSeconds = 5;

    service.fill({
      isRunning: true,
      remainingSeconds: 1,
    });

    jest.advanceTimersByTime(3000);

    jest.useRealTimers();

    await wait(1000);

    expect(service.isRunning).toEqual(false);
    expect(service.state).toEqual(PomodoroStateEnum.Break);
    expect(service.remainingTime).toMatchInlineSnapshot(`"00:05"`);
  });

  it('should advance to long break', async () => {
    mockSettings.pomodoroSettings.autoRunBreak = true;
    mockSettings.pomodoroSettings.autoRunWork = true;
    mockSettings.pomodoroSettings.longBreakInterval = 2;
    mockSettings.pomodoroSettings.shortBreakDurationSeconds = 1;
    mockSettings.pomodoroSettings.workDurationSeconds = 1;

    service.fill({
      isRunning: true,
      remainingSeconds: 1,
      shortBreakCount: 1,
      state: PomodoroStateEnum.Work,
    });

    await wait(4000);

    expect(service.state).toEqual(PomodoroStateEnum.LongBreak);
  });

  it('should automatically run next timer if autoRunBreak and autoRunWork is set to true', async () => {
    jest.useFakeTimers();

    mockSettings.pomodoroSettings.autoRunBreak = true;
    mockSettings.pomodoroSettings.autoRunWork = true;
    mockSettings.pomodoroSettings.workDurationSeconds = 1;
    mockSettings.pomodoroSettings.shortBreakDurationSeconds = 2;

    service.fill({
      isRunning: true,
      remainingSeconds: 1,
      state: PomodoroStateEnum.Work,
    });

    jest.advanceTimersByTime(2000);
    jest.useRealTimers();

    await wait(2000);

    expect(service.isRunning).toEqual(true);
    expect(service.state).toEqual(PomodoroStateEnum.Break);
    expect(service.remainingTime).toMatchInlineSnapshot(`"00:02"`);

    jest.useFakeTimers();
    jest.advanceTimersByTime(4000);
    jest.useRealTimers();

    await wait(2000);

    expect(service.isRunning).toEqual(true);
    expect(service.state).toEqual(PomodoroStateEnum.Work);
  });

  it('should handle restart', async () => {
    mockSettings.pomodoroSettings.autoRunBreak = true;
    mockSettings.pomodoroSettings.autoRunWork = true;
    mockSettings.pomodoroSettings.workDurationSeconds = 1;
    mockSettings.pomodoroSettings.shortBreakDurationSeconds = 1;
    mockSettings.pomodoroSettings.longBreakInterval = 2;

    service.fill({
      isRunning: false,
      remainingSeconds: 1,
      shortBreakCount: 1,
      state: PomodoroStateEnum.Break,
    });

    await service.restart();

    expect(service.state).toEqual(PomodoroStateEnum.Work);
    expect(service.shortBreakCount).toEqual(0);
    expect(service.isRunning).toEqual(false);
  });
});
