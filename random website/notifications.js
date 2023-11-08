function createNotification(eventTitle, eventDate) {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            // If notification permission is already granted
            var notification = new Notification('Upcoming Event: ' + eventTitle, {
                body: 'Join us on ' + eventDate + '.',
            });
        } else if (Notification.permission !== 'denied') {
            // Request permission if not denied
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    var notification = new Notification('Upcoming Event: ' + eventTitle, {
                        body: 'Join us on ' + eventDate + '.',
                    });
                }
            });
        }
    }
}

// Usage example: create a notification for each event
createNotification('Event 1', 'October 20, 2023');
createNotification('Event 2', 'November 15, 2023');