function reverse(word){
    let newstr = '';
    for(let i = (word.length - 1); i >= 0; i --){
        let a = word[i];
        newstr += a;
    }
    console.log(newstr);
}

reverse('Martin');