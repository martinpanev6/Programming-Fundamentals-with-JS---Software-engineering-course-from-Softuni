function dictionary(arr){

    let token = {};

    for(let str of arr){
    let diction = JSON.parse(str);
    let term = Object.keys(diction)[0];
    let description = Object.values(diction)[0];
    token[term] = description;
}

let result = Object.keys(token).sort((a, b) => a.localeCompare(b));
result.forEach(key =>{
    console.log(`Term: ${key} => Definition: ${token[key]}`);
});
}

dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burningapparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Bus":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);