function tseamAccount(arr) {
    
    let account = arr[0];
    let games = account.split(" ");
    let i = 1;

    while (arr[i] != "Play!") {
       
        let command = arr[i].split(" ");
        let action = command[0];
        let gam = command[1];

        if (action == "Install") {

            if (games[games.length - 1] != gam) {
                games.push(gam);
            }

        } else if (action == "Uninstall") {

            if (games.includes(gam)) {
                let tindex = games.indexOf(gam);
                games.splice(tindex, 1);
            }

        } else if (action == "Update") {

            if (games.includes(gam)) {
                let tindex = games.indexOf(gam);
                games.splice(tindex, 1);
                games.push(command[1]);
            }

        } else if (action == "Expansion") {

            let newCom = gam.split("-");

            if (games.includes(newCom[0])) {
                let index = games.indexOf(newCom[0]);
                games.splice(index + 1, 0, newCom[0] + ":" + newCom[1]);
            }

        }
        
        i++;
    }
    console.log(games.join(" "));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])