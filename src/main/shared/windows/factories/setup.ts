import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import url from 'url';

export const setupWindow = async (window: BrowserWindow, windowUrl: string) => {
  // Either use dev server when on dev, or production build otherwise.
  const windowUrlToLoad = isDev
    ? url.format({
        pathname: '//localhost:3000/',
        protocol: 'http',
        query: {
          path: windowUrl,
        },
      })
    : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
        query: {
          path: windowUrl,
        },
      });

  console.log(`Using ${windowUrlToLoad} as renderer url.`);

  await window.loadURL(windowUrlToLoad);

  return window;
};