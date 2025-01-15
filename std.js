const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

let abs=students.filter((mark)=>{
    return(mark.score>=70);
})
console.log("ab 70 : ",abs);

let a=students.filter((mark)=>{
    return(mark.score>=90);
})
console.log("A : ",a);

let b=students.filter((mark)=>{
    return(mark.score>=80&&mark.score<90);
})
console.log("B : ",b);

let c=students.filter((mark)=>{
    return(mark.score>=70&&mark.score<80);
})
console.log("C : ",c);

let d=students.filter((mark)=>{
    return(mark.score>=60&&mark.score<70);
})
console.log("D : ",d);

let f=students.filter((mark)=>{
    return(mark.score<60);
},0)
console.log("F : ",f);

let total=students.reduce((num1,num2)=>{
    return num1+num2.score;
},0);
console.log("total score : ",total);

let avg=total/students.length;
console.log("average : ",avg);

let aavg=students.filter((mark)=>{
    return(mark.score>=avg);
});
console.log("above avg : ",aavg);




