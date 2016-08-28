var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
    var sensor = new five.Sensor("A2");
    var servo = new five.Servo(9);
    sensor.on("change", function() {
        var deg = sensor.scaleTo(0, 180);
        servo.to(deg);
  });
})
