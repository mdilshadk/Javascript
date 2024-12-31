
let line="";

for(let i=1;i<=7;i++){    
    for(let j=i;j<=7;j++){  
    line+=" ";
    }
for(let k=1;k<=i;k++)
{
    line+="*";
}
line+="\n";
}


for(let i=1;i<=7;i++){    
    for(let j=0;j<=i;j++){
    
       line+=" ";
    }
    for(let k=i;k<7;k++){
    line+="*";
    }
    line+="\n";
}
console.log(line);
