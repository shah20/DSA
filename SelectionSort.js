function selectionSort(input) {
    for(let i = 0; i < input.length - 1; i++) {
        let min = i;
        for (let j = i; j< input.length; j++) {
            if(input[j] < input[i]) {
                min = j;
            }
        }
        if(min !== i) {
            let temp = input[i];
            input[i] = input[min];
            input[min] = temp;
        }
    }
    return input;
}

const input = [4,2,7,10,11,44,6,5,1,3];
console.log(bubbleSort(input));