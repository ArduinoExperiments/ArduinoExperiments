"use strict";
let express = require("express");
let app = express();

let five = require("johnny-five");
let board = new five.Board();

board.on('ready', () => {
    let servo = five.Servo(9);
    app.listen(3000, () => {
        console.log("Running server on port 3000");
    });
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/servo.html");
    });
    app.get("/:deg", (req, res) => {
        let deg = Number(req.params.deg);
        servo.to(deg);
        console.log("Moved servo to: " + deg);
        res.end();
    });
});

