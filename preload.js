const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveCSV: (csvContent) => ipcRenderer.invoke('save-csv', csvContent),
  openCSV: () => ipcRenderer.invoke('open-csv'),
  saveJSON: (jsonContent) => ipcRenderer.invoke('save-json', jsonContent),
  openJSON: () => ipcRenderer.invoke('open-json')
});
