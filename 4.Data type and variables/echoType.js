function echoType(param){
    console.log(typeof param);
    let type = typeof param;
    if(type == "string" || type == "number"){
        console.log(param);
    }else{
        console.log("Parameter is not suitable for printing");
    }
}

echoType(5)