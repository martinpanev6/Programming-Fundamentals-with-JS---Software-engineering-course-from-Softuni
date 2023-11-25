function extractEmails(str){
    let pattern = /[a-z0-9][a-z0-9\.\-_]+[a-z0-9]@[a-z][a-z-]+[a-z]\.[a-z][a-z-]+[a-z]/;
    let matches = str.match(pattern);
    console.log(matches);
}

extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");