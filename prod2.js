const products = [
    { name: "Laptop ", price: 80000 },
    { name: "Phone ", price: 50000 },
    { name: "Tablet ", price: 30000 },
    { name: "Smartwatch ", price: 20000 },
    { name: "Headphones ", price: 5000 }
];

let mort=products.filter((item)=>{
    return (item.price>=30000)
})
console.log(mort);

 let arr=products.map((item)=>{
    return item.name.toLowerCase();
 });
 console.log("array: ",arr);
 
 let ex=products.reduce((item,high)=>{
    return(item.price>=high.price?item:high)
 })
 console.log("expensive: ",ex);

 let lest=products.find((item)=>{
    return(item.price<10000)
 })
 console.log("less 1ok: ",lest);
 
 let dis=products.map((item)=>{
    return(item.price*10/100);
 })
 console.log("discount: ",dis);