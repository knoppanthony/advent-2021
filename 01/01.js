"use strict";
exports.__esModule = true;
var LineByLine = require("n-readlines");
var lineReader = new LineByLine('input.txt');
function pt1(lines) {
    lines.reset();
    var line;
    var depth = -1;
    var previousDepth = -1;
    var increaseCount = 0;
    while (line = lines.next()) {
        depth = parseInt(line.toString());
        if (previousDepth == -1) {
            previousDepth = depth;
        }
        if (depth > previousDepth) {
            increaseCount = increaseCount + 1;
        }
        previousDepth = depth;
    }
    return increaseCount;
}
function pt2(lines) {
    lines.reset();
    var line;
    var currentDepthSum = -1;
    var increaseCount = 0;
    var depthsArray = [];
    var previousDepthSum = -1;
    var current = 0;
    var rightOne = 0;
    var rightTwo = 0;
    while (line = lines.next()) {
        depthsArray.push(parseInt(line.toString()));
    }
    //Good ol index based access for easy rolling window compares
    for (var i = 0; i < depthsArray.length - 2; i++) {
        rightOne = depthsArray[i + 1];
        rightTwo = depthsArray[i + 2];
        current = depthsArray[i];
        currentDepthSum = current + rightOne + rightTwo;
        if (previousDepthSum == -1) {
            previousDepthSum = currentDepthSum;
        }
        if (currentDepthSum > previousDepthSum) {
            increaseCount = increaseCount + 1;
        }
        console.log(currentDepthSum);
        previousDepthSum = currentDepthSum;
    }
    return increaseCount;
}
//console.log(pt1(lineReader));
console.log(pt2(lineReader));
