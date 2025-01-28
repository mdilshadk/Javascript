let i,j,k;
let line="";

for(i=1;i<=5;i++){
    for(j=1;j<=4;j++){
        if(j==1||j==4||i==3){
            line+="* ";
        }
        else{
            line+="  "
        }
    }

    
    line+="\n"
}
console.log(line);

