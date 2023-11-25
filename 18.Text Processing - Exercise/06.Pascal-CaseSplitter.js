function splitAndJoinPascalCase(input) {
    let pattern = /[A-Z][a-z]*/gm;
    let mach = input.match(pattern);
    if(mach){
    console.log(mach.join(', '));
    }
}

splitAndJoinPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');