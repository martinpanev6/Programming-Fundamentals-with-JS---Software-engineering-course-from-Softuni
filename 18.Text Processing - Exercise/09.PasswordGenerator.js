function passwordGenerator(arr){
    let [str1, str2, replacementStr] = arr;
    let concatStr = str1 + str2;
    let vowels = ['a', 'i', 'o', 'u', 'e'];
    let idx = 0;

    for(let char of concatStr){
        if(vowels.includes(char)){
            concatStr = concatStr.replace(char, replacementStr[idx].toUpperCase());
            idx++;
            if(idx == replacementStr.length){
                idx = 0;
            }
        }
    }
    let password = concatStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);