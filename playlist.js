const playlist=["nishani","milta","ishq","titli","kun faya"];
console.log(playlist);


let add=playlist.push("kanave unai");
console.log("add  :",add);

// let remove=playlist.pop();
// console.log("remove  :",remove);

let len=playlist.length;
console.log("length :",len);

let acc=playlist.at(0,4);
console.log("access :",acc);

let str=playlist.toString();
console.log("string :",str);

let playlist2=["nishani","milta","ishq"];
let con=playlist.concat(playlist2);
console.log("concate :",con);

let arr=[["one","two"],["three","four"]];
let flat=arr.flat();
console.log("flat :",flat);

flat.splice(0, 2);
let unshif=flat.unshift("five","six");
console.log("unshift :",unshif);
console.log("splice & un shift ",flat);

playlist.sort();
console.log("sort :",playlist);

playlist.copyWithin(4,0);
console.log("copy :",playlist);





