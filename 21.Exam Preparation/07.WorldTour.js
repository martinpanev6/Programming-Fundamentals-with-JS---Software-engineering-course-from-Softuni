function worldTour(arr) {

    let allStops = arr.shift();
    let command = arr.shift();

    while (command != 'Travel') {

        let tokens = command.split(':');
        let action = tokens.shift();

        if (action == 'Add Stop') {
            let [index, string] = tokens;
            index = Number(index);
            if (index >= 0 && index < allStops.length) {
                allStops = allStops.slice(0, index) + string + allStops.slice(index);
            }
            console.log(allStops);
        } else if (action == 'Remove Stop') {
            let [startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);
            if ((startIdx >= 0 && startIdx < allStops.length) && (endIdx >= 0 && endIdx < allStops.length)) {
                allStops = allStops.slice(0, startIdx) + allStops.slice(endIdx + 1);
            }
            console.log(allStops);
        } else if (action == 'Switch') {
            let [oldStr, newStr] = tokens;
            allStops = allStops.split(oldStr).join(newStr);
            console.log(allStops);
        }

        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

);