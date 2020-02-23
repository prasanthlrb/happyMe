// var app = require('electron').remote;
// setTimeout(function () {
//     app.BrowserWindow.getFocusedWindow().close();
//     // var window = remote.getCurrentWindow();
//     // window.close();
// }, 2000);

const remote = require('electron').remote
setTimeout(setFlashingWindow, 3000);
function setFlashingWindow() {
    let w = remote.getCurrentWindow()
    w.close()
}