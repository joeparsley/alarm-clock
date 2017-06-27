var Alarm = require('./../js/scripts.js').alarmModule;


$(document).ready(function() {
// Alarm clock and interval for live update for HTML
 function update1() {
  $('#time').html(moment().format('H:mm:ss'));
  }
  setInterval(update1, 1000);
// Stores current time

  var now = moment().format('H:mm:ss');
  function update2(now) {
   $('#output').html(moment().format('H:mm:ss'));
   }
   setInterval(update2, 1000);


  $('#set-alarm').submit(function(){

    var alarmInput = $('#alarm-input').val();
    var newAlarm = new Alarm(now, alarmInput);
    console.log(newAlarm);

    var beginningTime = moment(now, 'h:mm');
    var endTime = moment(alarmInput, 'h:mm');
    console.log(beginningTime.isBefore(endTime));

    var final = newAlarm.alarmNotification(beginningTime, endTime);
    function update3(final) {
    setInterval(update3, 1000);

    console.log(final);

  });
});

// setInterval(function(){ alert("Hello"); }, 3000);
