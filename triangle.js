let a=5;
let b=5;
let c=5;

if(a==b&a==c&b==a&b==c&c==a&c==b){
    console.log("equilateral");
    
}
else if(a==b||a==c||b==a||b==c||c==a||c==b){
    console.log("isosceles");
    
}
else{
    console.log("scalene");
    
}