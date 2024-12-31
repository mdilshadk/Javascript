let n=15;
let prime=0;

if(n<2){
    prime=1;
}
else{
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            prime=1;
            break;
        }
    }
    
}
if(prime==0){
    console.log("prime");
    
}
else{
    console.log("not prime");
    
}