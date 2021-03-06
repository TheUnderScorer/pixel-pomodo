import {
  getInitialPomodoroSettings,
  getInitialPomodoroState,
} from '../../src/main/app/pomodoro/data';
import { bootstrapTestApp } from '../setup';
import { secondsToTime } from '../../src/shared/utils/time';
import { wait } from '../../src/shared/utils/timeout';
import { createTask } from '../helpers/tasks';

const initialPomodoroState = getInitialPomodoroState();
const initialPomodoroSettings = getInitialPomodoroSettings();

describe('Timer - as an user', () => {
  it('I should see timer after starting up', async () => {
    const app = await bootstrapTestApp({
      WORK_DURATION_SECONDS: initialPomodoroSettings.workDurationSeconds,
    });

    const timer = await app.client.$('#timer');

    await expect(timer.isExisting()).resolves.toEqual(true);

    const progress = await timer.$('.remaining-time');
    await progress.waitForExist();

    const progressText = await progress.getText();

    expect(progressText).toEqual(
      secondsToTime(initialPomodoroState.remainingSeconds).toClockString()
    );
  });

  it('I should be able to pause/run pomodoro', async () => {
    const app = await bootstrapTestApp({
      WORK_DURATION_SECONDS: 10,
    });

    const controlBtn = await app.client.$('#control');
    const timerTextEl = await app.client.$('.remaining-time');

    const timerText = await timerTextEl.getText();
    expect(timerText).toEqual('00:10');

    await controlBtn.click();

    await wait(2000);

    await controlBtn.click();

    const newTimerText = await timerTextEl.getText();

    expect(['00:08', '00:09']).toContain(newTimerText);
  });

  it('I should be able to see that it is break after finishing work', async () => {
    const app = await bootstrapTestApp({
      WORK_DURATION_SECONDS: 2,
      BREAK_DURATION_SECONDS: 5,
    });

    const btn = await app.client.$('#control');
    const stateText = await app.client.$('.pomodoro-state-text');

    await btn.click();

    await wait(3000);

    expect(await stateText.getText()).toEqual('Break');
  });

  it('I should be able to skip break', async () => {
    const app = await bootstrapTestApp({
      WORK_DURATION_SECONDS: 2,
      BREAK_DURATION_SECONDS: 1,
    });

    const btn = await app.client.$('#control');
    const stateText = await app.client.$('.pomodoro-state-text');

    await btn.click();

    await wait(3000);

    const nextStateBtn = await app.client.$('.move-to-next-state');

    await nextStateBtn.click();

    expect(await stateText.getText()).toEqual('Work');
  });

  it('I should be able to track duration of active task', async () => {
    const app = await bootstrapTestApp({
      WORK_DURATION_SECONDS: 2,
      BREAK_DURATION_SECONDS: 1,
    });

    await createTask(app);

    const input = await app.client.$('.task-estimation');
    await input.setValue(5);

    await wait(1200);

    const activeTaskTitle = await app.client.$('.active-task-title');
    const controlBtn = await app.client.$('#control');

    await controlBtn.click();

    await wait(2100);

    expect(await activeTaskTitle.getText()).toEqual('Test task\n(1/5)');
  });
});
