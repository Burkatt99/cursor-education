const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function getSubject (student) {
  const names =[];
  const subjects = [];
  const sub = Object.keys(student.subjects);
  subjects.push(sub.map((subject) => subject[0].toUpperCase() + subject.slice(1).replace('_'," ")));  
  return subjects;
}

document.writeln(`<p>Student ${students[0].name} have this subjects:${getSubject(students[0])}.</p>`);  
document.writeln(`<p>Student ${students[1].name} have this subjects:${getSubject(students[1])}.</p>`);
document.writeln(`<p>Student ${students[2].name} have this subjects:${getSubject(students[2])}.</p>`);

function getAverage(arr){
  const summa = arr.reduce((accumulator, currentEl) => {
    return accumulator + currentEl;
  }, 0);
  const average = summa/arr.length;
  return average.toFixed(2);
}
function getAvarageMark(student){
  const marks = [];
  const averageArr = [];
  marks.push([].concat.apply([], Object.values(student.subjects)));
  for(let k = 0; k < marks.length; k++){
   return getAverage(marks[k]);
 }
}
document.writeln(`<li>${students[0].name} have avarage mark:${getAvarageMark(students[0])}.</li>`);  
document.writeln(`<li>${students[1].name} have avarage mark:${getAvarageMark(students[1])}.</li>`);
document.writeln(`<li>${students[2].name} have avarage mark:${getAvarageMark(students[2])}.</li>`);

function getStudentInfo(student){
  const marks = [];
  const averageArr = [];
  marks.push([].concat.apply([],Object.values(student.subjects)));
  function markStudent() {
    for(let k = 0; k < marks.length; k++) {
     return getAverage(marks[k]);
   }
 }
 return markStudents = {
   course: student.course,
   name: student.name,
   averageMark: markStudent()
 };
}
document.writeln(`<p>Information about ${students[0].name}:</p>`);
document.writeln(`<li>${Object.entries(getStudentInfo(students[0]))}</li>`);
document.writeln(`<p>Information about ${students[1].name}:</p>`);
document.writeln(`<li>${Object.entries(getStudentInfo(students[1]))}</li>`);
document.writeln(`<p>Information about ${students[2].name}:</p>`);
document.writeln(`<li>${Object.entries(getStudentInfo(students[2]))}</li>`);

function getStudentsNames(arr){
  const result = [];
  arr.forEach((name, i) => {
    result.push(arr[i].name);
  });
  return result.sort();
}
const alphabetName = getStudentsNames(students);
document.writeln(`<p>Names of students in alphabetical order: ${alphabetName} </p>`);

function getMark(arr){
  const marks = [];
  const averageArr = [];
  const markStudents = {};
  for(let i=0; i < arr.length;i++){
    marks.push([].concat.apply([], Object.values(arr[i].subjects)));
  }
  for(let k = 0; k < marks.length; k++){
    averageArr.push(getAverage(marks[k]));
  }
  averageArr.forEach((mark, i) => {
    markStudents[arr[i].name] = mark;
  });
  return markStudents;
}
const nameWithMark = getMark(students);

function getBestStudent(arr){
 let max = 0;
 let bestStudent = '';
 Object.keys(arr).forEach(key => {
  if(max < arr[key]){
    max = arr[key];
    bestStudent = key;
  }
});
 return bestStudent;
}
document.writeln(`<p>The best student: ${getBestStudent(nameWithMark)} </p>`);

function calculateWordLetters(word){
 const arr = word.split("");
 const lettersInWord = {};
 arr.forEach(current => {
  lettersInWord[current] = arr.filter(letter => letter === current).length;
});
 document.writeln(`<p>The number of letters in a word '${word}':</p>`);
 return lettersInWord;
}
const letterInWord = calculateWordLetters('test');
Object.entries(letterInWord).map(([letter, number]) => {
  document.writeln(`<li>${letter}: ${number} </li>`);
});