var reason = [];
var person = null;
var work = null;
var management = null;
var others = null;

const axios = require('axios');
const os = require('os');
document.querySelector('#personal').addEventListener('click', () => {
    if (person == null) {
        person = 'Personal';
    } else {
        person = null;
    }
});
document.querySelector('#work').addEventListener('click', () => {
    if (work == null) {
        work = 'Work';
    } else {
        work = null;
    }
});
document.querySelector('#management').addEventListener('click', () => {
    if (management == null) {
        management = 'Management';
    } else {
        management = null;
    }
});
document.querySelector('#others').addEventListener('click', () => {
    if (others == null) {
        others = 'Others';
    } else {
        others = null;
    }
});
document.querySelector('#submit_btn').addEventListener('click', () => {
    sendData();
});
document.querySelector('#skip_button').addEventListener('click', () => {
    sendData();
});

function sendData() {
    var mode = document.getElementById('mode').value;
    var details = document.getElementById('details').value;
    if (person != null) {
        reason.push(person)
    }
    if (work != null) {
        reason.push(work)
    }
    if (management != null) {
        reason.push(management)
    }
    if (others != null) {
        reason.push(others)
    }

    var interfaces = os.networkInterfaces();
    const username = os.userInfo().username;
    var addresses;
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses = address.address;
            }
        }
    }
    axios.post('http://api.lrbtech.com/api/post-data', {
        name: username,
        dept: 'Admin',
        ip: addresses,
        mode: mode,
        details: details,
        reasons: reason,
    }).then(function (response) {
        thanku();
    }).catch(function (error) {
        console.log(error);
    });
}
function thanku() {
    window.location.href = "./thanks.html";
}
