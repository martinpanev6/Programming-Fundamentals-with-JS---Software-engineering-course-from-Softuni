function passwordValidator(pass){
    let isValidLength = passLength(pass);
    let isValidOnly = checkOnlyLetterDig(pass);
    let isValidMin = checkMin2Dig(pass);

    if(isValidLength && isValidOnly && isValidMin){
        console.log("Password is valid");
    }

    function passLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyLetterDig(pass){
        for(let curChar of pass){
            let code = curChar.charCodeAt();
            if(!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))){
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkMin2Dig(pass){
        let digCount = 0;
        for(let dig of pass){
            let code = dig.charCodeAt();
            if(code >= 48 && code <= 57){
                digCount++;
            }
        }
        if(digCount < 2){
            console.log("Password must have at least 2 digits");
            return false;
        }else{
            return true;
        }
    }
}

passwordValidator('Pa$s$s');
passwordValidator('LogIn');
passwordValidator('MyPass123');