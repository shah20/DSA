let memo = [];
let counter = 0;

function fib(n) {
    counter++;
    if(memo[n] !== undefined) {
        return memo[n];
    }
    
    if (n===0 || n===1) {
        // memo[n] = n;
        return n;
    }
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}

function fibBottomUp(n) {
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;

    for(let index = 2; index <= n; index++) {
        fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
    }
    return fibArray[n];
}

console.log(fib(40));
console.log(counter);