function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        result.push(left[i]);
        i++;
    }
    while(j<right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}

function mergeSort(input) {
    if(input.length === 1) return input;
    let middle = Math.floor(input.length/2);
    let left = mergeSort(input.slice(0,middle));
    let right = mergeSort(input.slice(middle));
    return merge(left, right);
}

console.log(mergeSort([1,4,5,7,56,76,222,2,3,6,8,100,122]));