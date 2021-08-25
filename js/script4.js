"use strict"
const matrix = [[1,2,3,4],[4,5,6,5],[7,8,9,5],[1,2,3,4]];
let solution = function (matrix) {
    let sum = 0;
    for(let i = 1; i < matrix.length; i++){
        for(let j = 0; j <= i - 1; j++){
            sum = sum + matrix[i][j];
        }
    }
    return sum;
};
console.log(solution(matrix));