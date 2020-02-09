'use strict';

console.log('sw_register.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js')
        .then(console.log)
        .catch(console.error);
}

if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then(sw => {
        // One-off sync
        return sw.sync.register('myOneOffSync')
            .then(r => {
                // Sync registered
            });
    });

    navigator.serviceWorker.ready.then(sw => {
        // Periodic sync
        return sw.periodicSync.register({
            tag: "myPeriodicSync",
            minPeriod: 60 * 1000, // 60 seconds
            powerState: 'avoid-draining',
            networkState: 'avoid-cellular'
        }).then(r => {
            // Sync registered
        });
    });
}