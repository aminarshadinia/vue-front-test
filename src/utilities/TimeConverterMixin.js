

var timeConverterMixin = {
    methods: {
        // We also could use MOMENT package.
        // The function takes a date string as input, creates a Date object for both the current time and the past time, and calculates the difference in seconds.
        // Based on the time difference, it returns the most appropriate unit (seconds, minutes, hours, days, months, or years) in a human-readable format.
        timeConverter(date) {
            const now = new Date();
            const past = new Date(date);
            const seconds = Math.floor((now - past) / 1000);

            let interval = Math.floor(seconds / 31536000);
            if (interval >= 1) return interval + " year" + (interval === 1 ? " ago" : "s ago");

            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) return interval + " month" + (interval === 1 ? " ago" : "s ago");

            interval = Math.floor(seconds / 86400);
            if (interval >= 1) return interval + " day" + (interval === 1 ? " ago" : "s ago");

            interval = Math.floor(seconds / 3600);
            if (interval >= 1) return interval + " hour" + (interval === 1 ? " ago" : "s ago");

            interval = Math.floor(seconds / 60);
            if (interval >= 1) return interval + " minute" + (interval === 1 ? " ago" : "s ago");

            return Math.floor(seconds) + " second" + (seconds === 1 ? " ago" : "s ago");
        }
    }
}


export { timeConverterMixin };
