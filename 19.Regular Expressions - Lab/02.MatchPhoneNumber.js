function matchPhone([str]){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;
    let sorted = str.match(pattern);
    console.log(sorted.join(', '));
}

matchPhone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222, +359-2-222-2222']);