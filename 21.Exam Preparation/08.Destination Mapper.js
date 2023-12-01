function destinationMapper(str) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let matches = str.matchAll(pattern);
    let destinations = [];
    let travelPoints = 0;


    for (let match of matches) {
        let destination = match.groups.destination;
        destinations.push(destination);
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);


}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");