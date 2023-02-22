// function sumMultiples(n, total = 0, depth = 0) {
//     if (depth === n) {
//         return total;
//     } else {
//         if (depth % 5 === 0 || depth % 3 === 0) {
//             return sumMultiples(n, total + depth, depth+1);
//         } else {
//             return sumMultiples(n, total, depth+1);
//         }
//     }
// }

// console.log(sumMultiples(1000));





// function fibEven(ans = 0, x = 1, y = 2) {
//     while (x <= 4000000) {
//         if (x % 2 === 0) {
//             return fibEven(ans + x, y, x + y);
//         } else {
//             return fibEven(ans, y, x + y);            
//         }
//     }
//     return ans;
// }

// console.log('fibeven', fibEven());


// function compute() {
// 	let ans = 0;
// 	let x = 1;
// 	let y = 2;
// 	while (x <= 4000000) {
// 		if (x % 2 === 0) {
//             ans += x;
//         }
//         let c = x + y;
//         x = y;  
//         y = c;
//     }
// 	return ans;
// }

// console.log('compute', compute());



// function largestPrime(n) {

// }





// function isPrime(n)
// {
//     // Check if n=1 or n=0
//     if (n <= 1)
//         return false;
//     // Check if n=2 or n=3
//     if (n == 2 || n == 3)
//         return true;
//     // Check whether n is divisible by 2 or 3
//     if (n % 2 == 0 || n % 3 == 0)
//         return false;
//     // Check from 5 to square root of n
//     // Iterate i by (i+6)
//     for (var i = 5; i <= Math.sqrt(n); i = i + 6)
//         if (n % i == 0 || n % (i + 2) == 0)
//             return false;
 
//     return true;
// }




function smallestMultiple(n = 20, ans = 0) {
    while (n > 0) {
        if (ans % n === 0 ) {
            smallestMultiple(n-1, ans);
        } else {
            smallestMultiple(20, ans + 20);
        }
    }
    return ans; 
}

console.log(smallestMultiple());