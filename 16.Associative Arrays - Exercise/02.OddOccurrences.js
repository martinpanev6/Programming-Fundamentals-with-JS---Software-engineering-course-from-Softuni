function oddOccurrencens(arr){
    let newarr = arr.split(' ');
    let print = {};
    for(let item of newarr){
        let word = item.toLowerCase();
        if(word in print){
            print[word]++;
        }else{
            print[word] = 1;
        }
    }
    let entries = Object.keys(print).filter(name => print[name] % 2 !== 0);
    console.log(entries.join(' '));
}

oddOccurrencens('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrencens('Cake IS SWEET is Soft CAKE sweet Food');