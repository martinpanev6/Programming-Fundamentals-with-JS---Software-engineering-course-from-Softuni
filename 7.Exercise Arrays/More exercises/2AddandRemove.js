function addAndRemove(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let num = i + 1;
        let command = arr[i];
        if(command == "add"){
            newArr.push(num);
        }else if(command == "remove"){
            newArr.pop();
        }
    }
    if(newArr.length < 1){
        console.log("Empty");
    }else{
    console.log(newArr.join(" "));
    }
}

//addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
//addAndRemove(['remove', 'remove', 'remove']);