"use strict";
let express = require("express");
let app = express();

let five = require("johnny-five");
let board = new five.Board();

board.on('ready', () => {
    var button = new five.Button(5);
    var led = new five.Led(9);
    button.on("press", () => {
        led.toggle();
    });
    app.listen(3000, () => {
        console.log("Running server on port 3000");
    });
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/light-switch.html");
    });
    app.get("/on", (req, res) => {
        led.on();
        res.end();
    });
    app.get("/off", (req, res) => {
        led.off();
        res.end();
    });
});

