function sortNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    }else if(num2 > num1 && num2 > num3){
        console.log(num2)
    }else{
        console.log(num3)
    }
    if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
        console.log(num1);
    }else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)){
        console.log(num2)
    }else{
        console.log(num3);
    }
    if(num1 < num2 && num1 < num3){
        console.log(num1);
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}

sortNum(9, -5, 10);