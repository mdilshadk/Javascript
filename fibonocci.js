let i,n=8;
let t1=0,t2=1;
let nextterm=t1+t2;


console.log(t1);
console.log(t2);


for (i=3;i<=n;++i) {
    console.log(nextterm);
    t1=t2;
    t2=nextterm;
    nextterm= t1+t2;
  }


