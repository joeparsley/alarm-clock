//business logic stuff for a particular module

function Alarm(currentTime, userAlarm) {
  this.currentTime = currentTime;
  this.userAlarm = userAlarm;
}

// Alarm.prototype.alarmNotification = function() {
//    return this.currentTime.isBefore(this.userAlarm);
// }



exports.alarmModule = Alarm;
