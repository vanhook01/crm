// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Error registering Service Worker:', error);
            });
    });
}

// Service Worker
if (typeof self === 'undefined') {
    var self = this;
}

if (self && self.addEventListener) {
    self.addEventListener('install', (event) => {
        event.waitUntil(self.skipWaiting());
    });

    self.addEventListener('activate', (event) => {
        event.waitUntil(self.clients.claim());
    });

    // Handle push notifications
    self.addEventListener('push', (event) => {
        const payload = event.data.json();
        const title = payload.title || 'Notification';
        const options = {
            body: payload.body || 'You have a new notification!',
            icon: payload.icon || '/path/to/icon.png',
            badge: payload.badge || '/path/to/badge.png',
            // Additional options like actions, vibrate, etc.
        };

        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    });

    // Handle notification click events
    self.addEventListener('notificationclick', (event) => {
        const notification = event.notification;
        const action = event.action;

        if (action === 'action1') {
            // Handle action1 click
            // Add your custom behavior here
        } else if (action === 'action2') {
            // Handle action2 click
            // Add your custom behavior here
        } else {
            // Handle default notification click
            // Add your custom behavior here
        }

        notification.close();
    });

    // Handle notification close events
    self.addEventListener('notificationclose', (event) => {
        // Handle notification close
        // Add your custom behavior here
    });
}
