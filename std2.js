const studentrecords = [
    { name: "Alice", scores: [95, 87, 92] },
    { name: "Bob", scores: [78, 85, 80] },
    { name: "Charlie", scores: [88, 90, 91] },
    { name: "David", scores: [60, 58, 65] }
];

let average=studentrecords.map((student)=>{
    let mark=student.scores.reduce((num1,num2)=>{
    return num1+num2;
    },0);
    let avg=mark/studentrecords.length;
    return {name:student.name,avg};
    });
    console.log("average :",average);
    

let abe=studentrecords.map((student)=>{
    
    let avgg=student.scores.filter((scores)=>scores>=85);
        return {name:student.name,avgg}
    
})
console.log("abw 85",abe);

const hiavg = average.reduce((highest, student) => 
    student.average > highest.average ? student : highest
);
console.log("high score: ",hiavg);

const low = studentrecords.find(student => Math.min(...student.scores) < 60);
console.log("low score", low); 

let con=studentrecords.map((student)=>{
    return student.name.toUpperCase();
  })
  console.log(con);