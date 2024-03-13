const electron = require("electron");
const winBuild = electron.BrowserWindow;
const url = require("url");
const path = require("path");
const app = electron.app;

let win;
function createWindow() {
  win = new winBuild();
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"),
  //     slashes: true,
  //     protocol: "file",
  //   })
  // );
  win.loadURL(path.join(__dirname, "index.html"));

  win.on("close", () => {
    win = null;
  });
}

app.on("ready", () => {
  createWindow();
});
