let i,j,k;
let line="";

for(i=1;i<=5;i++){
    for(j=i;j<=5;j++){
        line+=" ";
    }
    for(k=1;k<=i;k++){
        if(i==5||k==1||k==i){
            line+=" *";
        }
        else{
            line+="  ";
        }
    }
    line+="\n";
}
console.log(line);
