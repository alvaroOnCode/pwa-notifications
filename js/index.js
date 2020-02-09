'use strict';

console.log('index.js');

// Ask permission when web is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Your browser does not support Notifications.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
});

// DOM button handler
function showNotification() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        const notification = new Notification('Álvaro Saavedra', {
            icon: './images/picture.jpg',
            body: "Check my website.",
        });

        notification.onclick = function () {
            window.open("https://alvarosaavedradiaz.com/");
        };
    }
}