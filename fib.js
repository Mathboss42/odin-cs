function fibs(n, a = [0, 1]) {
    if (n <= a.length) return a;
    return fibs(n, [...a, a[a.length - 1] + a[a.length - 2]]);
}



function fib(n) {
    if (n===1) return 0;
    if (n===2) return 1;

    return fib(n-1) + fib(n-2);
}

console.log(fibs(8));
console.log(fib(8));