const students = [
  {
    name: "Walker",
    score : 75
  },
  {
    name : "Lucy",
    score : 100,
  },
  {
    name : "Kofi",
    score : 80 
  },
  {
    name : "Kifi",
    score : 60
  },
  {
    name : "Dorinda",
    score : 40
  }
];

function generateReport(){

    // fucntion to find the average score
    const averageScore = students.reduce((sum , {score})=> sum + score ,0) / students.length;

    // student with high score
    const topStudent = students.reduce((best , student) => student.score > best.score ? student : best );
    
    // Lowest scoring student
    const bottomStudent = students.reduce((best,student) => student.score < best.score ? student : best );
     
    // Passed students
    const passed = students.filter(({score}) => score >= 60);
     
    // Boosted scores 
      const boost = students.map(({name ,score}) => ({
        name,
        boostedScore: score + 5 
      }));
     
    
  return {
    averageScore,
    topStudent,
    bottomStudent,
    passed,
    boost
  };
  
}

const report = generateReport();
console.log(report);