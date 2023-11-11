function manageStudentsGrades(input) {
    let studentGrades = {};
    input.forEach(el => {
        el = el.split(' ');
        let name = el.shift();
        let grades = el.map(Number);
        studentGrades.hasOwnProperty(name) ? studentGrades[name].push(...grades) : studentGrades[name] = grades; 
    });
    
    let sortedEntries = Object.entries(studentGrades).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [studentName, grade] of sortedEntries) {
        let averageGrade = grade.reduce((a, b) => a + b, 0) / grade.length;
        console.log(`${studentName}: ${averageGrade.toFixed(2)}`);
    }
}
manageStudentsGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);