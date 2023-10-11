function lastKNumsSequence(n, k) {
    let sequence = [1];
    for(let i = 1; i < n; i++){
        let nextel = 0;
        for(let j = Math.max(0, i - k); j < i; j++){
            nextel += sequence[j];
        }
        sequence.push(nextel);
    }
    console.log(sequence.join(' '));
}

lastKNumsSequence(6, 3);
