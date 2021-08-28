"use strict"
const arr = [1, 2, "343", [1,2], 4, "4.5", -0.5, 4.5, NaN, Number.MAX_SAFE_INTEGER-100, Infinity];
const solution = function (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number" && Number.isFinite(arr[i]) && !Number.isNaN(arr[i])){
            let dec = arr[i] - Math.trunc(arr[i]);
            sum = sum + dec;
        }
        console.log(sum);
    }
    return Number.isInteger(sum);
  };
  console.log(solution(arr));
  let k = Infinity;
  console.log(typeof(k));