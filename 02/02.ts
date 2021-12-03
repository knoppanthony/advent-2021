
import LineByLine = require('n-readlines');
const lineReader = new LineByLine('input.txt');


function pt1(lines: LineByLine): number{
    
    lines.reset();
    let line: any;
    let command: string = "";
    let amount: number = 0;
    let hoz: number = 0;
    let depth: number = 0;
  
    while (line = lines.next()) {
        const lineSplit = line.toString().split(' ');
        command = lineSplit[0].toString();
        amount = parseInt(lineSplit[1]);
 
        if (command == "forward") {
            hoz = hoz + amount;
        }

        
        if (command == "up") {
            depth = depth - amount;
        }

        
        if (command == "down") {
            depth = depth + amount
        }

        //console.log(hoz);
        //console.log(depth);

    }
    return depth * hoz;
}


function pt2(lines: LineByLine): number{
    
    lines.reset();
    let line: any;
    let command: string = "";
    let amount: number = 0;
    let hoz: number = 0;
    let depth: number = 0;
    let aim: number = 0;
  
    while (line = lines.next()) {
        const lineSplit = line.toString().split(' ');
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
