function reverseAnArray(n, nums){
let reversed = [];
for(let m = n - 1; m >= 0; m--){
    reversed.push(nums[m]);
}
console.log(reversed.join(' '));
}

reverseAnArray(4, [1, 2, 3, 4, 5, 6]);