//business logic stuff for a particular module

function Alarm(currentTime, userAlarm) {
  this.currentTime = currentTime;
  this.userAlarm = userAlarm;
}

Alarm.prototype.alarmNotification = function(currentTime, alarmTime) {
  if (currentTime <= alarmTime) {
    return "this works";

  } else {
    return "still might work";
  }
  // console.log('hello');
};



exports.alarmModule = Alarm;
