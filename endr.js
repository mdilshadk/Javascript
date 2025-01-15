let arr=['car','apple','player','carrot','cop'];

let arre=[];
for(let i=0;i<arr.length;i++){
    
    let temp=arr[i];
    let str=temp.toString();
    let spl=str.split("");
    let rev=spl.reverse().join("");

    let arr2= rev.split("")
    if(arr2[0]==='r'){
        arre.push(temp);
    }
}
console.log(arre);