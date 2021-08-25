"use strict";

const array = ["1 2 22 55 63", "2 5 0", "3 0 0", "99 99 99 999 99999 999 999 99", "0 0 0 0 0"];
let solution = function (array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let arrayWord = array[i].split(" ");
        let min = +arrayWord[0];
        for(let j = 1; j < arrayWord.length; j++){
            if(+arrayWord[j] < min){
                min = +arrayWord[j];
            }
        }
        sum = sum + min;
    }
    return sum;
    };
    console.log(solution(array));


