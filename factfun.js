function fact(n) {
    if (n < 0) {
        return ;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(fact(5)); 