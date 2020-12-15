import { app, BrowserWindow, Menu } from 'electron';
import isDev from 'electron-is-dev';
import { AppContext, createContext } from './context';
import { setupPomodoro } from './app/pomodoro/setup';
import { setupTasks } from './app/tasks/setup';
import log from 'electron-log';
import { setupSystem } from './app/system/setup';

if (!isDev) {
  Object.assign(console, log.functions);
}

log.catchErrors({
  showDialog: true,
});

log.debug(`Dirname: ${__dirname}`);

let mainWindow: BrowserWindow | null;

const createWindow = async (context: AppContext) => {
  if (mainWindow) {
    return;
  }

  mainWindow = await context.windowFactory.createTimerWindow();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const setupAppMenu = (context: AppContext) => {
  Menu.setApplicationMenu(context.menuFactory.createAppMenu());

  context.pomodoro.subscribe(() => {
    Menu.setApplicationMenu(context.menuFactory.createAppMenu());
  });
};

app.whenReady().then(async () => {
  const context = await createContext();

  setupAppMenu(context);
  setupPomodoro(context);
  setupTasks(context);
  setupSystem(context);

  await createWindow(context);

  app.on('activate', async () => {
    await createWindow(context);
  });
});

app.on('window-all-closed', () => {
  if (process.env.CLOSE_ON_ALL_WINDOW_CLOSE === 'true') {
    app.quit();
  }
});
