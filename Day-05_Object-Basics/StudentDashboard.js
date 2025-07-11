const students = [];


function addStudent(){
  const  name = prompt("Enter student name") ;
  const score = prompt("Enter students' score") ;
  const newStudent = {
    name,
    score: Number(score)
  };
  students.push(newStudent);
  return newStudent;
}

console.log(addStudent());