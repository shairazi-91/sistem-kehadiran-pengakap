// Attendance Tracking and Frequency Calculation

class AttendanceTracker {
    constructor() {
        this.attendance = {};
    }

    markAttendance(userId) {
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        if (!this.attendance[date]) {
            this.attendance[date] = [];
        }
        this.attendance[date].push(userId);
    }

    getFrequency(userId) {
        let count = 0;
        for (const date in this.attendance) {
            count += this.attendance[date].filter(id => id === userId).length;
        }
        return count;
    }

    getAttendance() {
        return this.attendance;
    }
}

// Example usage:
const tracker = new AttendanceTracker();
tracker.markAttendance('user1');
tracker.markAttendance('user2');
console.log(tracker.getFrequency('user1')); // Outputs the frequency of user1
console.log(tracker.getAttendance());