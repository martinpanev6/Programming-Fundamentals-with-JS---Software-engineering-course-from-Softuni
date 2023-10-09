
function printCertificate(grades, names) {
    if(passGrade(grades)){
        printHeader();
        printName(names);
        formatGrades(grades)
    }else{
        console.log('Student does not qualify');
        
    }
    function printHeader(){
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    
    function printName(nameArr){
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }
    
    function passGrade(grade) {
        return grade >= 3;
    }
    
    function formatGrades(grade){
        if(grade < 3){
            console.log(`Fail (2)`);
        }else if(grade < 3.5){
            console.log(`Poor (${grade.toFixed(2)})`);
        }else if(grade < 4.5){
            console.log(`Good (${grade.toFixed(2)})`);
        }else if(grade < 5.5){
            console.log(`Very good (${grade.toFixed(2)})`);
        }else{
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(5.25, ['Martin', 'Panev'])