
function prime(n) {
    
    if (n<=1) {
       
    } 
    else {
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
              return false;
              
            }
        }
    }
    return true;
}
console.log(prime(11));

