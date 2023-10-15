function sortAnArrayBy2Criteria(arr) {
    let sortedArray = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArray.join('\n'));
}

sortAnArrayBy2Criteria(['alpha',
                        'beta',
                        'gamma']);