"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var LineByLine = require("n-readlines");
var lineReader = new LineByLine("./input.txt");
function pt1(lines) {
    lines.reset();
    var line;
    var lineStr = "";
    var mostCommon;
    var leastCommon;
    var mostCommonStr = "";
    var leastCommonStr = "";
    while (line = lines.next()) {
        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined') {
            mostCommon = new Array(lineStr.length).fill(0);
            leastCommon = new Array(lineStr.length).fill(0);
        }
        for (var i = 0; i < lineStr.length; i++) {
            //Do something....need to find the most common bit in each column of
            // 101
            // 111
            // 101
            // 000
            // This would be.... 101..since those are the most common bits in each column
            // PUzzle doesn't specify if there is a tie, so input doesn't have any yet.
            // new array, size of length...add if one, subtract if zero...see which bit is winning based on <= 0 or > 0
            if (lineStr[i] == "0") {
                mostCommon[i] = (mostCommon[i] - 1);
            }
            else if (lineStr[i] == "1") {
                mostCommon[i] = (mostCommon[i] + 1);
            }
        }
    }
    for (var _i = 0, mostCommon_1 = mostCommon; _i < mostCommon_1.length; _i++) {
        var bit = mostCommon_1[_i];
        if (bit <= 0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }
        else {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        }
    }
    return parseInt(mostCommonStr, 2) * parseInt(leastCommonStr, 2);
}
function mostCommon(currentBits) {
    var lineStr = "";
    var mostCommon;
    var leastCommon;
    var mostCommonStr = "";
    var leastCommonStr = "";
    for (var _i = 0, currentBits_1 = currentBits; _i < currentBits_1.length; _i++) {
        var line = currentBits_1[_i];
        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined') {
            mostCommon = new Array(lineStr.length).fill(0);
            leastCommon = new Array(lineStr.length).fill(0);
        }
        for (var i = 0; i < lineStr.length; i++) {
            if (lineStr[i] == "0") {
                mostCommon[i] = (mostCommon[i] - 1);
            }
            else if (lineStr[i] == "1") {
                mostCommon[i] = (mostCommon[i] + 1);
            }
        }
    }
    for (var _a = 0, mostCommon_2 = mostCommon; _a < mostCommon_2.length; _a++) {
        var bit = mostCommon_2[_a];
        if (bit < 0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }
        else if (bit > 0) {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        }
        else if (bit == 0) {
            mostCommonStr = leastCommonStr.concat("1");
        }
    }
    return mostCommonStr;
}
function leastCommon(currentBits) {
    var lineStr = "";
    var mostCommon;
    var leastCommon;
    var mostCommonStr = "";
    var leastCommonStr = "";
    for (var _i = 0, currentBits_2 = currentBits; _i < currentBits_2.length; _i++) {
        var line = currentBits_2[_i];
        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined') {
            mostCommon = new Array(lineStr.length).fill(0);
            leastCommon = new Array(lineStr.length).fill(0);
        }
        for (var i = 0; i < lineStr.length; i++) {
            if (lineStr[i] == "0") {
                mostCommon[i] = (mostCommon[i] - 1);
            }
            else if (lineStr[i] == "1") {
                mostCommon[i] = (mostCommon[i] + 1);
            }
        }
    }
    for (var _a = 0, mostCommon_3 = mostCommon; _a < mostCommon_3.length; _a++) {
        var bit = mostCommon_3[_a];
        if (bit < 0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }
        else if (bit > 0) {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        }
        else if (bit == 0) {
            leastCommonStr = leastCommonStr.concat("0");
        }
    }
    return leastCommonStr;
}
function pt2(lines) {
    var line;
    var lineStr = "";
    var mostCommonStr = "";
    var leastCommonStr = "";
    var allTheBits = new Array();
    while (line = lines.next()) {
        lineStr = line.toString().trim();
        allTheBits.push(lineStr);
    }
    var leastAllTheBits = __spreadArray([], allTheBits, true);
    mostCommonStr = mostCommon(allTheBits);
    leastCommonStr = leastCommon(leastAllTheBits);
    for (var i = 0; i < mostCommonStr.length; i++) {
        allTheBits = allTheBits.filter(function (item) { return item[i] == mostCommonStr[i]; });
        if (allTheBits.length == 1) {
            break;
        }
        mostCommonStr = mostCommon(allTheBits);
    }
    for (var i = 0; i < leastCommonStr.length; i++) {
        leastAllTheBits = leastAllTheBits.filter(function (item) { return item[i] == leastCommonStr[i]; });
        if (leastAllTheBits.length == 1) {
            break;
        }
        leastCommonStr = leastCommon(leastAllTheBits);
    }
    return parseInt(allTheBits[0], 2) * parseInt(leastAllTheBits[0], 2);
}
//console.log(pt1(lineReader));
console.log(pt2(lineReader));
