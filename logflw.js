let arr=["flower","flow","flight"];
let emp=[];
let emp1=[];

for(let i=0;i<arr.length;i++){
    let temp=arr[i];
        for(let j=0;j<arr.length;j++){
        let temp2=arr[j];
    
    if(temp[0]==temp2[0]&&temp[1]==temp2[1]){
        let con=temp[0].concat(temp[1]);
        emp.push(con);
    }
    
}}
console.log(emp[0]);
