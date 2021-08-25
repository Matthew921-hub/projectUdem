"use strict"

const str = "7бун 30коп + 8бун 20 коп";
function qq(str){const array = str.split(" ");
let sumBun = 0,
    sumCop = 0;
for(let i = 0; i < array.length; i++){
    if(array[i].slice(-3) == "бун"){
        sumBun = sumBun + +array[i].slice(0, array[i].length-3);
    } else {
        sumCop = sumCop + +array[i].slice(0, array[i].length-3);
    }
}
while(sumCop >= 100){
    sumCop = sumCop - 100;
    sumBun++;
}
return (sumBun + "бун " + sumCop + "коп");
}
console.log(qq(str));