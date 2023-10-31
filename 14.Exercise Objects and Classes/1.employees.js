function employees(arr){

    for(let name of arr){
        let person = { name: name, number: name.length };
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);