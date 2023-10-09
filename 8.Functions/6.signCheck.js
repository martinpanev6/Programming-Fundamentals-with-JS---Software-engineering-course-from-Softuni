function signCheck(num1, num2, num3){
    let isPositive = true;

    if(num1 > 0){
        if(num2 > 0){
            if(num3 > 0){
                isPositive = true;
            }else if(num3 < 0){
                isPositive = false;
            }
        }else if(num2 < 0){
            if(num3 > 0){
                isPositive = false;
            }else if(num3 < 0){
                isPositive = isPositive = true;
            }
        }
    }else if(num1 < 0){
        if(num2 > 0){
            if(num3 > 0){
                isPositive = false;
            }else if(num2 < 0){
                isPositive = true;
            }
        }else if(num2 < 0){
            if(num3 > 0){
                isPositive = true;
            }else if(num3 < 0){
                isPositive = false;
            }
        }
    }
    if(isPositive){
        console.log('Positive');
    }else{
        console.log('Negative');
    }
}

signCheck(-2, 4, -5)