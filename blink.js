"use strict";

let five = require("johnny-five");
let board = new five.Board();

board.on('ready', function() {
    console.log("Running");
    let led = new five.Led(13);
    led.strobe(1000);
});
