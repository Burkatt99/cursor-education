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

function getSubject (arr) {
  const names =[];
  const subjects = [];
  const result = [];
  for(let i=0; i< arr.length;i++){
   const sub = Object.keys(arr[i].subjects);
   subjects.push(sub.map((subject) => subject[0].toUpperCase() + subject.slice(1).replace('_'," ")));  
 }
 for(let k=0; k < arr.length; k++){
  names.push(arr[k].name);
}
for(let i=0; i< names.length;i++){
  result.push(names[i],subjects[i]);
}
return result;
}
console.log(getSubject(students));
const nameStudent = getSubject(students);
for(let i=0; i < nameStudent.length; i+=2){
  document.writeln(`<p>Student ${nameStudent[i]} have this subjects:${nameStudent[i+1]}.</p>`);  
}



function getAverage(arr){
  arr.reduce((accumulator, currentEl) => {
    return summa = accumulator + currentEl;
  }, 0);
  let average = summa/arr.length;
  return average.toFixed(2);
}
function getAvarageMark(arr){
  const marks = [];
  const averageArr = [];
  const markStudents = {};
  for(let i=0; i < arr.length;i++){
    marks.push([].concat.apply([], Object.values(arr[i].subjects)));
  }
  for(k = 0; k < marks.length; k++){
    averageArr.push(getAverage(marks[k]));
  }
  console.log(averageArr);
  averageArr.forEach((mark, i) => {
    markStudents[arr[i].name] = mark;
  });
  return markStudents;
}
const nameWithMark = getAvarageMark(students);
console.log(nameWithMark);
document.writeln(`<p>Students have this marks: </p>`);
Object.entries(nameWithMark).map(([name, marks]) => {
  document.writeln(`<li>${name}: ${marks} </li>`);
});

function getStudentInfo(arr){
  const marks = [];
  const averageArr = [];
  const markStudents = [];
  for(let i=0; i< arr.length;i++){
    marks.push([].concat.apply([],Object.values(arr[i].subjects)));
  }
  for(k = 0; k < marks.length; k++){
    averageArr.push(getAverage(marks[k]));
  }
  averageArr.forEach((cours, i, mark) => {
    markStudents.push({
     course: arr[i].course,
     name: arr[i].name,
     averageMark: mark[i]
   });
  });
  return markStudents;
}
const informStudent = getStudentInfo(students);
console.log(informStudent);

document.writeln(`<p>Information about students:</p>`);
informStudent.forEach((mark) => {
  document.writeln(`<li>${Object.entries(mark)}</li>`);
});

function getStudentsNames(arr){
  const result = [];
  students.forEach((name, i) => {
    result.push(arr[i].name);
    result.sort();
  });
  return result;
}
const alphabetName = getStudentsNames(students);
console.log(alphabetName);
document.writeln(`<p>Names of students in alphabetical order: ${alphabetName} </p>`);

function getBestStudent(arr){
 let max = 0;
 let bestStudent = 0;
 Object.keys(nameWithMark).forEach(key => {
  if(max < nameWithMark[key]){
    max = nameWithMark[key];
    bestStudent = key;
  }
});
 return bestStudent;
}
const bestStudent = getBestStudent(nameWithMark);
console.log(bestStudent);
document.writeln(`<p>The best student: ${bestStudent} </p>`);

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
console.log(letterInWord);
Object.entries(letterInWord).map(([letter, number]) => {
  document.writeln(`<li>${letter}: ${number} </li>`);
});