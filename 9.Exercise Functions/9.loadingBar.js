function loadingBar(num){
    let arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
    if(num == 10){
        arr.splice(0, 1, "%");
    }else if(num == 20){
        arr.splice(0, 2, "%", "%");
    }else if(num == 30){
        arr.splice(0, 3, "%", "%", "%");
    }else if(num == 40){
        arr.splice(0, 4, "%", "%", "%", "%");
    }else if(num == 50){
        arr.splice(0, 5, "%", "%", "%", "%", "%");
    }else if(num == 60){
        arr.splice(0, 6, "%", "%", "%", "%", "%", "%");
    }else if(num == 70){
        arr.splice(0, 7, "%", "%", "%", "%", "%", "%", "%");
    }else if(num == 80){
        arr.splice(0, 8, "%", "%", "%", "%", "%", "%", "%", "%");
    }else if(num == 90){
        arr.splice(0, 9, "%", "%", "%", "%", "%", "%", "%", "%", "%");
    }else if(num == 100){
        arr.splice(0, 10, "%", "%", "%", "%", "%", "%", "%", "%", "%", "%");
    }else{
        arr = arr;
    }

    if(num == 100){
        console.log("100% Complete!");
        console.log(`[${arr.join('')}]`);
    }else{
        console.log(`${num}% [${arr.join('')}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(20);
loadingBar(50);
loadingBar(100);