
const path = require("path");

const  {
  app,
  BrowserWindow,
  BrowserWindowConstructorOptions : WindowOptions,
}= require('electron')

const { createFileRoute, createURLRoute } = require('electron-router-dom')
//our window you can chanege the size  and other

let mainWindow = new BrowserWindow({
  show: true,
  height: 680,
  width: 950,
  useContentSize: true,
  // frame : false,
  webPreferences: {
    preload: path.join(__dirname, "./preload.js"),
    nodeIntegration: true
  },
});


 // Don't forget to check if the port is the same as your dev server
 const devServerURL = createURLRoute('http://localhost:3000', 'main')

 const fileRoute = createFileRoute(
   path.join(__dirname, '../index.html'),
   'main'
 )

if (app.isPackaged) {
 //production
 mainWindow.loadFile(...fileRoute)
} else {
  //devlopment 
  mainWindow.loadURL(devServerURL)
  // Automatically open Chrome's DevTools in development mode.
  mainWindow.webContents.openDevTools();
}








module.exports = mainWindow;



