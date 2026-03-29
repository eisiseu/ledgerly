const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#ffffff',
      symbolColor: '#2d2f2f',
      height: 36
    },
    backgroundColor: '#f6f6f6',
    show: false
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Fallback: show window after 3 seconds even if ready-to-show doesn't fire
  setTimeout(() => {
    if (mainWindow && !mainWindow.isVisible()) {
      mainWindow.show();
    }
  }, 3000);
}

// CSV 파일 저장 IPC 핸들러
ipcMain.handle('save-csv', async (event, csvContent) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    title: 'CSV 내보내기',
    defaultPath: `ledgerly_export_${new Date().toISOString().slice(0, 10)}.csv`,
    filters: [{ name: 'CSV Files', extensions: ['csv'] }]
  });

  if (!result.canceled && result.filePath) {
    // BOM for Excel Korean encoding
    fs.writeFileSync(result.filePath, '\uFEFF' + csvContent, 'utf-8');
    return true;
  }
  return false;
});

// CSV 파일 읽기 IPC 핸들러
ipcMain.handle('open-csv', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'CSV 가져오기',
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    properties: ['openFile']
  });
  if (!result.canceled && result.filePaths.length > 0) {
    return fs.readFileSync(result.filePaths[0], 'utf-8');
  }
  return null;
});

// 앱 단일 인스턴스 잠금 — 두 번째 실행 시 기존 창 포커스
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
  app.whenReady().then(createWindow);
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
