function searchForNum(arr1, arr2) {

    let elCount = arr2[0];
    let elDelete = arr2[1];
    let numSearch = arr2[2];

    let newarr = arr1.slice(0, elCount);
    arr1 = newarr;

    for (let i = 1; i <= elDelete; i++) {
        arr1.shift();
    }

    let occurance = 0;

    for (let j = 0; j < arr1.length; j++) {

        if (arr1[j] == numSearch) {
            occurance++;
        }

    }

    console.log(`Number ${numSearch} occurs ${occurance} times.`);
}

//searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);