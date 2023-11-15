function companyUsers(arr){
    let companyEmployees = {};

    for(let item of arr){
        let [company, id] = item.split(' -> ');

        if(company in companyEmployees){
            if(!companyEmployees[company].includes(id)){
            companyEmployees[company].push(id);
            }
        }else{
            companyEmployees[company] = [id];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    for(let [name, id] of entries){
        console.log(name);
        for(i of id){
            console.log(`-- ${i}`);
        }
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);