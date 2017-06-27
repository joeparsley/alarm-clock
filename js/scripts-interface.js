var Alarm = require('./../js/scripts.js').alarmModule;


$(document).ready(function() {
// Alarm clock and interval for live update for HTML
 function update() {
    $('#time').html(moment().format('H:mm'));
  }
  setInterval(update, 1000);
// Stores current time
  var now = moment().format('H:mm');


  $('#set-alarm').submit(function(){

    var alarmInput = $('#alarm-input').val();
    var newAlarm = new Alarm(now, alarmInput);
    console.log(newAlarm);

    var beginningTime = moment(now, 'h:mm');
    var endTime = moment(alarmInput, 'h:mm');
    console.log(beginningTime.isBefore(endTime));

  });

});
