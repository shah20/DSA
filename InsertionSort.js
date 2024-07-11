function insertionSort(input) {
    let temp;
    for(let i=1; i<input.length; i++){
        temp = input[i];
        for(var j=i-1; input[j] > temp && j > -1; j--) {
            input[j+1] = input[j];
        }
        input[j+1] = temp;
    }
    return input;
}

const input = [4,2,7,10,11,44,6,5,1,3];
console.log(insertionSort(input));

// Stariing from 1 go to end of the input and compare each  elements before the current element
// and swap if the current element is less than the previous element.