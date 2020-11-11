import { bootstrapTestApp } from '../setup';
import { wait } from '../../src/shared/utils/timeout';
import { TaskState } from '../../src/shared/types/tasks';
import { createTask } from '../helpers/tasks';

describe('Tasks list - as an user', () => {
  it('I should be able to add new task', async () => {
    const app = await bootstrapTestApp();

    await createTask(app);

    const listItems = await app.client.$$('.task-list-item');
    expect(listItems).toHaveLength(1);

    const taskTitle = await app.client.$('.task-title');
    expect(await taskTitle.getText()).toEqual('Test task');
  });

  it('I should be able to estimate task', async () => {
    const app = await bootstrapTestApp();

    await createTask(app);

    const input = await app.client.$('.task-estimation');
    await input.setValue(5);

    await wait(1500);

    const activeTaskTitle = await app.client.$('.active-task-title');
    expect(await activeTaskTitle.getText()).toEqual('Test task\n(0/5)');
  });

  it('I should be able to mark task as done', async () => {
    const app = await bootstrapTestApp();

    await createTask(app);

    const checkbox = await app.client.$('.task-state-checkbox');
    await checkbox.click();

    await wait(1500);

    const todoListItems = await app.client.$$('.task-list-item');

    expect(todoListItems).toHaveLength(0);

    const todoTab = await app.client.$(`.tabbed-task-state-${TaskState.Todo}`);
    const completedTab = await app.client.$(
      `.tabbed-task-state-${TaskState.Completed}`
    );

    expect(await todoTab.getText()).toEqual('Todo(0)');
    expect(await completedTab.getText()).toEqual('Done(1)');

    await completedTab.click();

    await wait(1500);

    const doneListItems = await app.client.$$('.task-list-item');
    expect(doneListItems).toHaveLength(1);
  });
});
