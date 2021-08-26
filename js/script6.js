"use strict"
let x = 4;
let solution = function (x) {
    let sum = 0;
    for( let i = 1; i <= x ; i++){
        sum = sum + i;
    }
    return sum;
  };
  console.log(solution(x));