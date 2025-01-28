let num=[1,2]; 

let distinct=[...new Set(num)].sort((a,b)=>b-a);

let max=Math.max(...num);

if (distinct.length >= 3) {
    console.log(distinct[2]); 
} else{
    console.log(max);
}