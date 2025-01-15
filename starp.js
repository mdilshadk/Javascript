
let i,j,k;
let line="";

for(i=1;i<=5;i++){
    for(j=i;j<=5;j++){
       line+=" ";
    }
    for (let k=1;k<=i;k++) {
        line+=" %c64+i";
        
    }
    line+="\n"
}
console.log(line);
