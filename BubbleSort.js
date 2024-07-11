function bubbleSort(input) {
    for(let i = input.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(input[j] > input[j+1]) {
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input;
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const input = [4,2,6,5,1,3];
console.log(bubbleSort(input));