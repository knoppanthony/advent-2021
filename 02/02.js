"use strict";
exports.__esModule = true;
var LineByLine = require("n-readlines");
var lineReader = new LineByLine('input.txt');
function pt1(lines) {
    lines.reset();
    var line;
    var command = "";
    var amount = 0;
    var hoz = 0;
    var depth = 0;
    while (line = lines.next()) {
        var lineSplit = line.toString().split(' ');
        command = lineSplit[0].toString();
        amount = parseInt(lineSplit[1]);
        if (command == "forward") {
            hoz = hoz + amount;
        }
        if (command == "up") {
            depth = depth - amount;
        }
        if (command == "down") {
            depth = depth + amount;
        }
        //console.log(hoz);
        //console.log(depth);
    }
    return depth * hoz;
}
function pt2(lines) {
    lines.reset();
    var line;
    var command = "";
    var amount = 0;
    var hoz = 0;
    var depth = 0;
    var aim = 0;
    while (line = lines.next()) {
        var lineSplit = line.toString().split(' ');
        command = lineSplit[0].toString();
        amount = parseInt(lineSplit[1]);
        if (command == "forward") {
            hoz = hoz + amount;
            depth = depth + (aim * amount);
        }
        if (command == "up") {
            aim = aim - amount;
        }
        if (command == "down") {
            aim = aim + amount;
        }
        //console.log(hoz);
        //console.log(depth);
    }
    return depth * hoz;
}
//console.log(pt1(lineReader));
console.log(pt2(lineReader));
