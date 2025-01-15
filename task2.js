let arr=['cat','apple','car','carrot','cop'];
//['cat','car','carrot']
let arre=[];
for(let i=0;i<arr.length;i++){
    
    let temp=arr[i];

    if(temp[0]==='c'&&temp[1]==='a'){
        arre.push(temp);
    }
}
console.log(arre);

