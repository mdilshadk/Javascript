let arr=['car','apple','car','carrot','cop'];
let arre=[];
for(let i=0;i<arr.length;i++){

    let temp=arr[i];
    if(!arre.includes(temp)){
        arre.push(temp);
    }
}
console.log(arre);