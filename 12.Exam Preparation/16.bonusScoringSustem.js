function bonusScoringSystem(arr){

    arr = arr.map(Number)
    let studentCount = Number(arr.shift());
    let totalLectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());

    let maxA = Number(arr.shift());
    for(let el of arr){
        if(Number(el) > maxA){
            maxA = Number(el);
        }
    }
    let totalBonus = maxA / totalLectures * (5 + additionalBonus);
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${maxA} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20']);  
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);