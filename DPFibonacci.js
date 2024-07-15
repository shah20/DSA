let memo = [];

function fib(n) {

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

fib(40);