
import LineByLine = require('n-readlines');
const lineReader = new LineByLine("./input.txt");


function pt1(lines: LineByLine): number{
    
    lines.reset();
    let line: any;
    let lineStr: String = "";
    let mostCommon: Array<number>;
    let leastCommon: Array<number>;
    let mostCommonStr: string = "";
    let leastCommonStr: string = "";
    while (line = lines.next()) {
        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined'){
            mostCommon = new Array<number>(lineStr.length).fill(0);
            leastCommon = new Array<number>(lineStr.length).fill(0);

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
            if ( lineStr[i] == "0" ){
                mostCommon[i] = (mostCommon[i] - 1)
            }else if (lineStr[i] == "1"){
                mostCommon[i] = (mostCommon[i] + 1)
            }
        }
    }

    for (var bit of mostCommon){
        if (bit <=0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }else {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        }
    }

    return parseInt(mostCommonStr,2) * parseInt(leastCommonStr,2)
}



function mostCommon(currentBits: Array<string>): string{
    let lineStr: string = "";
    let mostCommon: Array<number>;
    let leastCommon: Array<number>;
    let mostCommonStr: string = "";
    let leastCommonStr: string = "";

    for(var line of currentBits){

        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined'){
            mostCommon = new Array<number>(lineStr.length).fill(0);
            leastCommon = new Array<number>(lineStr.length).fill(0);
        }

        for (var i = 0; i < lineStr.length; i++) {
            if ( lineStr[i] == "0" ){
                mostCommon[i] = (mostCommon[i] - 1)
            }else if (lineStr[i] == "1"){
                mostCommon[i] = (mostCommon[i] + 1)
            }
        }
    }

    for (var bit of mostCommon){
        if (bit < 0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }else if (bit > 0) {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        } else if (bit == 0) {
            mostCommonStr = leastCommonStr.concat("1");
        }
    }

    return mostCommonStr
}

function leastCommon(currentBits: Array<string>): string{
    let lineStr: string = "";
    let mostCommon: Array<number>;
    let leastCommon: Array<number>;
    let mostCommonStr: string = "";
    let leastCommonStr: string = "";

    for(var line of currentBits){

        lineStr = line.toString().trim();
        if (typeof mostCommon == 'undefined'){
            mostCommon = new Array<number>(lineStr.length).fill(0);
            leastCommon = new Array<number>(lineStr.length).fill(0);
        }

        for (var i = 0; i < lineStr.length; i++) {
            if ( lineStr[i] == "0" ){
                mostCommon[i] = (mostCommon[i] - 1)
            }else if (lineStr[i] == "1"){
                mostCommon[i] = (mostCommon[i] + 1)
            }
        }
    }

    for (var bit of mostCommon){

        if (bit <0) {
            mostCommonStr = mostCommonStr.concat("0");
            leastCommonStr = leastCommonStr.concat("1");
        }else if (bit > 0) {
            mostCommonStr = mostCommonStr.concat("1");
            leastCommonStr = leastCommonStr.concat("0");
        } else if (bit == 0) {
            leastCommonStr = leastCommonStr.concat("0");
        }
    }

    return leastCommonStr
}


function pt2(lines: LineByLine): number{
    let line;
    let lineStr: string = ""
    let mostCommonStr: string = "";
    let leastCommonStr: string = "";
    let allTheBits: Array<string> = new Array<string>();

    while (line = lines.next()) {
        lineStr = line.toString().trim();
        allTheBits.push(lineStr)
    }
    let leastAllTheBits = [...allTheBits];
    mostCommonStr = mostCommon(allTheBits);
    leastCommonStr = leastCommon(leastAllTheBits);

    for (var i = 0; i < mostCommonStr.length; i++) {
        allTheBits = allTheBits.filter(item => item[i] == mostCommonStr[i] )
        if (allTheBits.length == 1){
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
    return parseInt(allTheBits[0],2) * parseInt(leastAllTheBits[0],2);


}



//console.log(pt1(lineReader));
console.log(pt2(lineReader));
