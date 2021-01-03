import { Menu } from 'electron';
import { getPomodoroMenuItems } from './shared/pomodoro';
import { PomodoroService } from '../../app/pomodoro/services/pomodoroService/PomodoroService';

export class ContextMenuFactory {
  constructor(private readonly pomodoro: PomodoroService) {}

  createTrayContextMenu() {
    return Menu.buildFromTemplate([
      ...getPomodoroMenuItems(this.pomodoro),
      {
        type: 'separator',
      },
      {
        role: 'quit',
        label: 'Quit',
      },
    ]);
  }
}