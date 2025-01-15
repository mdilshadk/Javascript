const str=["Javascript is Awesome"];

let leng=str[0].length;
console.log("length ",leng);

let pos = str[0].charAt(5);
console.log("position ",pos);

let code=str[0].charCodeAt(5);
console.log("charcode ",code);

let retr=str[0].slice(-1);
console.log("retrive ",retr);

let acc=str[0].at(3);
console.log("axess ",acc);

let scr=str[0].slice(4,10);
console.log(scr);

let awe=str[0].slice(-8);
console.log(awe);

let jav=str[0].slice(0,10);
console.log(jav);

let up=str[0].toUpperCase();
console.log(up);

let lo=str[0].toLowerCase();
console.log(lo);

const str2=["Let's Learn"];
let con=str[0].concat(" ",str2[0]);
console.log(con);

let s=["       hello      "];
let sp=s[0].trim();
console.log("both spsce",sp);

let spb=s[0].trimStart();
console.log("space begin",spb);

let sbe=s[0].trimEnd();
console.log("space end",sbe);

let pads=str[0].padStart(25,"*");//25 is total length
console.log("add * in beggin :",pads);

let pade=str[0].padEnd(25,"-");
console.log("add - in end :",pade);

let rep=str[0].repeat(2);
console.log(rep);

let repl=str[0].replace("Awesome","Cool");
console.log(repl);

let replall=str[0].replaceAll(" ","-");
console.log(replall);

let conv=str[0].split(" ");
console.log(conv);

