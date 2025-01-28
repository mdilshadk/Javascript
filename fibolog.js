
let n=5;

let i,m=8;
let t1=0,t2=1;
let nextterm=t1+t2;
let fib=[];
let result;
fib.push(t1);
fib.push(t2);

for (i=3;i<m;++i) {
    nextterm= t1+t2;
    fib.push(nextterm);
    t1=t2;
    t2=nextterm;
}

 for(let j=0;j<=fib.length;j++){
    
    res1=fib[n-1];
    res2=fib[n-2];
    result=res1+res2;   
} 
 console.log(result);
  


