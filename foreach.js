let products = [
    {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
    {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
    {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
    {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
    {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];

// products.forEach((item)=>{
//     console.log("all product name :",item.pName);
    
// })

// let lcd=products.filter((item)=>{
//     return(item.display=='lcd');
// })
// console.log("all lcd is : ",lcd);

// let fg=products.filter((item)=>{
//     return(item.band=='5g');
// })
// console.log("5g products :",fg);

// let lft=products.filter((item)=>{
//     return(item.price<=50000);
// })
// console.log("less 50000 :",lft);

let hi=products.reduce((item,high)=>{
    return (item.price>=high.price?item:high);
})
console.log("higher :",hi);

let low=products.reduce((item,low)=>{
    return (item.price<=low.price?item:low);
})
console.log("lower :",hi);