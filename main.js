const { app, BrowserWindow, screen } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();
    const real_width = primaryDisplay.size.width;
    const real_height = primaryDisplay.size.height;
    console.log(real_width, real_height);
    mainWindow = new BrowserWindow({
        width: real_width, 
        height: real_height,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.resizable = false;

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.setMenu(null);
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})