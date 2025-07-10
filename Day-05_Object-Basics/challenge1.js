const student = {
  name: "Ama",
  grade: "B+",
  course: "JavaScript"
};


function printStudent({name , grade , course}){
  console.log(`${name} has a grade of ${grade} in ${course}`);
}
printStudent(student);



// Array Destructuring
const colors = ["red", "green", "blue", "yellow"];

const [color1 , color2] = colors;

const [newcolor1, color3] = colors ;

const [maincolor , ...othercolors] = colors;


const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  rating: 8.8,
  genres: ["Sci-Fi", "Action"]
};


const {title,rating} = movie;

const {firstgenre , ...othergenres} = movie.genres;

function printMovie({title,rating,firstgenre,director}){
  console.log(`${title} is a ${firstgenre} movie directed by ${director} with a rating of ${rating}`);
}

printMovie(movie);