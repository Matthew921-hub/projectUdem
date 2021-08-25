"use strict"

const dateOfBirth = "10.03";

function znak(dateOfBirth){
    const day = +dateOfBirth.split(".")[0],
          month = +dateOfBirth.split(".")[1];
          console.log(day, month);
    if((month == 3 && day >= 21) || (month == 4 && day <= 20)){return "Овен";}
    else if(month == 4 && day >= 21 || month == 5 && day <= 21){return "Телец";}
    else if(month == 5 && day >= 22 || month == 6 && day <= 21){return "Близнецы";}
    else if(month == 6 && day >= 22 || month == 7 && day <= 22){return "Рак";}
    else if(month == 7 && day >= 23 || month == 8 && day <= 21){return "Лев";}
    else if(month == 8 && day >= 22 || month == 9 && day <= 23){return "Дева";}
    else if(month == 9 && day >= 24 || month == 10 && day <= 23){return "Весы";}
    else if(month == 10 && day >= 24 || month == 11 && day <= 22){return "Скорпион";}
    else if(month == 11 && day >= 23 || month == 12 && day <= 22){return "Стрелец";}
    else if(month == 12 && day >= 23 || month == 1 && day <= 20){return "Козерог";}
    else if(month == 1 && day >= 21 || month == 2 && day <= 19){return "Водолей";}
    else if((month == 2 && day >= 20) || (month == 3 && day <= 20)){return "Рыбы";}
    else {return "Wrong date."}
}
console.log(znak(dateOfBirth));
    