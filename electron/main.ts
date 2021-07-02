import 'reflect-metadata'
import { app, BrowserWindow } from 'electron'
import { runMigrations } from '../api/infra/migrations'
import { registerListeners } from '../api/server'
import path from 'path'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

async function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets', 'logo.png'),
    width: 1100,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  await runMigrations()

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', async () => {
  if (require('electron-squirrel-startup')) return app.quit();
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow()
  }
})
