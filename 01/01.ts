
import LineByLine = require('n-readlines');
const lineReader = new LineByLine('input.txt');


function pt1(lines: LineByLine): number{

    lines.reset();
    let line: any;
    let depth: number = -1;
    let previousDepth: number = -1;
    let increaseCount: number = 0;
  
    while (line = lines.next()) {
        depth = parseInt(line.toString()); 
        if (previousDepth == -1){
            previousDepth = depth;
        }
    
        if (depth > previousDepth){
            increaseCount = increaseCount + 1;
        }
        previousDepth = depth;
    
    }
    return increaseCount;
}

function pt2(lines: LineByLine) : number{
    lines.reset();
    let line: any;
    let currentDepthSum: number = -1;
    let increaseCount: number = 0;
    let depthsArray: number[] = [];
    let previousDepthSum: number = -1;
    let current: number = 0
    let rightOne: number = 0
    let rightTwo: number = 0

    while (line = lines.next()) {
        depthsArray.push(parseInt(line.toString()));
    }
    
    //Good ol index based access for easy rolling window compares
    for (let i =0; i < depthsArray.length-2;i++){

        rightOne = depthsArray[i+1];
        rightTwo = depthsArray[i+2];
        current = depthsArray[i];

        currentDepthSum = current + rightOne + rightTwo

        if (previousDepthSum == -1){
            previousDepthSum = currentDepthSum;
        }

        if (currentDepthSum > previousDepthSum){
            increaseCount = increaseCount + 1;
        }

        console.log(currentDepthSum)
        previousDepthSum = currentDepthSum;
    }

    return increaseCount;

}


//console.log(pt1(lineReader));
console.log(pt2(lineReader));
