"use strict"
const a = '00000000000001',
      b = '1';
let solution = function (a, b) {
    let sum = 0;
    let arr = [];
    if(a.length >= b.length){
        while(a.length > b.length){
            b = "0".concat(b);
        }
        for(let i = b.length - 1; i >= 0; i--){
            sum = +a[i] + +b[i];
            arr.unshift(sum);
        }
    } else{
        while(b.length > a.length){
            a = "0".concat(a);
        }
        for(let i = a.length - 1; i >= 0; i--){
            sum = +a[i] + +b[i];
            arr.unshift(sum);
        }
    }
    for(let i = arr.length - 1; i >= 1; i--){
        if(arr[i] >= 10){
            arr[i - 1]++;
            arr[i] = arr[i] % 10;
        }
    }
    while(arr[0] == 0){
        arr.shift();
    }
    return arr.join("");
};
console.log(solution(a, b));
