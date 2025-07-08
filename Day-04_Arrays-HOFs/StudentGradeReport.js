const students = [
  { name: "Saka", score: 85 },
  { name: "Ama", score: 58 },
  { name: "Yaw", score: 92 },
  { name: "Akua", score: 45 },
  { name: "Kojo", score: 76 }
];


function processGrades(students){
  //average , boosted , passed.
  const average = students.reduce((sum , student) => sum + student.score , 0) / students.length;

  const boosted = students.map(student => ({
      name : student.name ,
      score:Math.min(student.score + 5 , 100)
  }));

  const passed = students.filter(student => student.score >= 60);
  return{
    average,
    boosted,
    passed
  };
  
}

const report = processGrades(students)
console.log(report);