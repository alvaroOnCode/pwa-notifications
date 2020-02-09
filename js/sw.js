'use strict';

console.log('sw.js');

const version = 2;

// Installation
self.addEventListener('install', function (event) {
    console.log('SW ' + version + ' installed at ', new Date().toLocaleTimeString());
});

// Activation
self.addEventListener('activate', function (event) {
    console.log('SW ' + version + ' activated at ', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', function (event) {
    if (!navigator.onLine) {
        event.respondWith(new Response(
            '<h1>You are offline</h1>',
            { headers: { 'Content-Type': 'text/html' } }
        ));
    } else {
        console.log(event.request.url);
        event.respondWith(fetch(event.request));
    }
});

self.addEventListener('push', function (event) {
    const payload = event.data.json();

    //...

    const options = {};
    event.waitUntil(
        self.registration.showNotification('Title', options)
    );

});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    const data = event.notification.data;

    //...

    event.waitUntil(
        clients.openWindow('...')
    );
});

self.addEventListener('sync', function (event) {
    if (event.tag == 'myOneOffSync') {
        event.waitUntil(doSomeStuff());
    }

    if (event.tag == 'myPeriodicSync') {
        event.waitUntil(doSomeStuff());
    }
});