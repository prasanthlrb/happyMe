// // All of the Node.js APIs are available in the preload process.
// // It has the same sandbox as a Chrome extension.
const os = require('os');
const axios = require('axios');
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  //   for (const type of ['chrome', 'node', 'electron']) {
  //     replaceText(`${type}-version`, process.versions[type])
  //   }
  const username = os.userInfo().username;
  document.getElementById('username').innerHTML = username;
  //console.log(axios)
  // document.querySelector('#submit_btn').addEventListener('click', () => {
  //   alert("OK")
  // const axios = require('axios');

  // thanku()
})
// });

// // function postData() {
// //   console.log("DAta Send Successfully")
// // }

// document.querySelector('#submit_btn').addEventListener('click', () => {
//   alert("OK")

// })
// const remote = require('electron').remote
// setInterval(setFlashingWindow, 3000);
// let w = remote.getCurrentWindow()
// var value = 0;
// function setFlashingWindow() {
//   value = document.getElementById('closeApp').value;
//   console.log(value)

//   w.close()
// }