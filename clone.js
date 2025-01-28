let obj={name:"anu",age:67}
console.log(obj);



let clone={...obj}
console.log(clone);

clone.name="kl"
console.log(clone);
let cloneUser = Object.assign({}, obj);
console.log(cloneUser);
