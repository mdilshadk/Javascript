const std=["appu","abu","raju","radha","luttu","kuttu","raju"];

let pos = std.indexOf("radha");
console.log("position : ",pos);

let lpos=std.findLastIndex(x=> "raju");
console.log(lpos);

let inc=std.includes("kuttu");
console.log(inc);

let first = std.find(myFunction);
console.log(first);
function myFunction(value, index, array) {
  return value >2;
}

let firsti = numbers.findIndex(myFunction);
console.log(firsti);
function myFunction(value, index, array) {
  return value > 18;
}

