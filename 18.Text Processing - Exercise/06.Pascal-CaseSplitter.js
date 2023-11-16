function splitAndJoinPascalCase(input) {
    const words = input.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    const result = words.join(', ');

    console.log(result);
}

splitAndJoinPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');