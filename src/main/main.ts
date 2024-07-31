/* eslint global-require: off, no-console: off, promise/always-return: off */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, screen } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1775,
    height: 800,
    icon: getAssetPath('icon.png'),
    resizable: false,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  ipcMain.on('resize-window', (event, width, height) => {
    mainWindow?.setSize(width, height);
    const screenHeight = screen.getPrimaryDisplay().bounds.height;
    const screenWidth = screen.getPrimaryDisplay().bounds.width;
    const { width: windowWidth, height: windowHeight } =
      mainWindow!.getBounds();

    const x = Math.round((screenWidth - windowWidth) / 2);
    const y = Math.round((screenHeight - windowHeight) / 2);
    mainWindow?.setPosition(x, y);
    if (mainWindow instanceof BrowserWindow) {
      mainWindow.loadURL('http://localhost:1212/index.html#/study');
    }
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  new AppUpdater();
};

const db = (function createDbConnection() {
  const sqlite3 = require('sqlite3').verbose();
  const path = require('path');

  let dbPath = path.join(__dirname, 'main_sql.db');

  let db = new sqlite3.Database(dbPath, (err: Error) => {
    if (err) {
      console.error(err.message);
    }
  });
  db.serialize(() => {
    db.run(`
        create table if not exists users (
          id integer primary key autoincrement,
          name text unique not null,
          course integer not null,
          troop integer not null
        )
    `);
  });
  return db;
})();

ipcMain.on('sql-insert', (event, name, course, troop) => {
  event.preventDefault();
  const sql = 'insert into users(name, course, troop) values (?, ?, ?)';
  const params = [name, course, troop];
  db.run(sql, params);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
