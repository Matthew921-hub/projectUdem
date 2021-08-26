"use strict"
const arr = [1, 2, "343", [1,2], 4, 4.5, NaN, Number.MAX_SAFE_INTEGER];
const solution = function (arr) {
    function countDigits(n) {
        for(var i = 0; n > 1; i++) {
           n /= 10;
        }
        return i;
     }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number" && Number.isFinite(arr[i]) && Number.isFinite(arr[i]) && !Number.isNaN(arr[i]) && countDigits(arr[i]>14)){
            sum = sum + arr[i];
        }
        console.log(sum);
    }
    return Number.isInteger(sum);
  };
  console.log(solution(arr));
  console.log(34345);