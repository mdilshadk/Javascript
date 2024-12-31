let line="";

for(let i=1;i<=4;i++){
    for(let j=i;j<=5;j++){
        line+=" ";
    }
    for(let k=1;k<=i;k++){
        line+=" *";
    }

    line+="\n";
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        line+=" ";
    }
    for(let k=i;k<=5;k++){
        line+=" *";
    }

    line+="\n";
}
console.log(line);