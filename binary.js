let num="1010";

let a=num.split("")
let result;
for(let i=0;i<a.length;i++){
    
    result=(a[0]*8) + (a[1]*4) + (a[2]*2) + (a[3]*1);
    
}
console.log(result);


