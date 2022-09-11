/* First I understood that the input is an array (a shallow array), so this is my working solution for this type of input. */

"use strict"

function diagonalDifference(arr) {
    // Write your code here
  const itemsInRow = arr[0];
  const itemsTotal = arr.length;
  let firstDiag = [];
  let secondDiag = [];
  let addIndex = 0;
  let subtractIndex = 0;
  
  for (let i=1; i<=itemsInRow; i++) {
    if (arr[i+addIndex]) {firstDiag.push(arr[i+addIndex])}
    addIndex = addIndex + itemsInRow;
    
    if (arr[(i*itemsInRow)-subtractIndex-1]) {
      secondDiag.push(arr[(i*itemsInRow)-subtractIndex])
      subtractIndex++;
    }
  }
  
  let firstSum = firstDiag.reduce((prev, cur) => prev + cur, 0);
  let secondSum = secondDiag.reduce((prev,cur) => prev + cur, 0);
  // console.log(firstDiag);
  // console.log(secondDiag);
  let sumsDiff = Math.abs(firstSum - secondSum);

  // console.log(sumsDiff)
  return sumsDiff;
}
  
diagonalDifference([3,11,2,4,4,5,6,10,8,-12])
// numbers 11,5,-12 (sum 4) => indexes 1 5 9
// numbers 4,5,10 (sum 19) => indexes 3 5 7
