let arr=['apple','orange','kiwi','banana'];
let grf=[];
    for(let i=0;i<arr.length;i++){
        let temp=arr[i];
        if(temp.length>=5){
            grf.push(temp);
        }
    }
console.log(grf);

