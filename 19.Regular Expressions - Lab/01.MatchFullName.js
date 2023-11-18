function matchFullName(str){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let sorted = str.match(pattern);
    console.log(sorted.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");