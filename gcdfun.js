
function gcd(a,b){
    if(b==0){
        return a;
    }
    else{
        return gcd(b,a%b);
    }
}
let a=20;
let b=28;
console.log(gcd(a,b));


