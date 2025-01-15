let n = 18; 
let isPrime = true;

if (n<=1) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);