
let i,j,k;
let line="";

for(i=1;i<=4;i++){
    for(j=i;j<=4;j++){
       line+=" ";
    }
    for (let k=1;k<=i;k++) {
        line+=" *";
        
    }
    line+="\n"
}
console.log(line);
