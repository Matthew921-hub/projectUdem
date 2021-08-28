"use strict"

const arr = [3, 4, 53, 5.123, "4", 1, -2, null, "2abc23", 7, 1, 2, 3, 4];

let solution = function (arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=0 && arr[i] <= 9 && Number.isInteger(arr[i]))
        str = str + arr[i];
    }
    while(str.length < 10){
        str = str + "0";
    }
    let arrNew = str.split("");
    let arrNew_1 = ["("];
    for(let i = 0; i < 10; i++){
        arrNew_1.push(arrNew[i]);
        if(i == 2){
            arrNew_1.push(") ");  
        } else if(i == 5){
            arrNew_1.push("-");
        }
    }
    str = arrNew_1.join("");
    return str;
  };

  console.log(solution(arr));
  console.log(typeof(solution(arr)));