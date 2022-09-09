'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
      // Write your code here
      
    let posAmount = 0;
    let negAmount = 0;
    let zeroAmount = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) { posAmount++ }
      else if (arr[i] < 0) { negAmount++ }
      else if (arr[i] === 0) { zeroAmount++ }
      else { return "not valid input" }
     }
     
    let posProportion = posAmount / arr.length
    let negProportion = negAmount/arr.length
    let zeroProportion = zeroAmount/arr.length
  
    console.log((posProportion.toFixed(6)));
    console.log((negProportion.toFixed(6)));
    console.log((zeroProportion.toFixed(6)));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
