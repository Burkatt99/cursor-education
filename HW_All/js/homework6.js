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

function getSubject () {
  let names =[];
  let subjects = [];
  for(let i=0; i< students.length;i++){
   let sub = Object.keys(students[i].subjects);
   subjects.push(sub.map((subject) => subject[0].toUpperCase() + subject.slice(1).replace('_'," ")));  
 }
 for(let k=0; k < students.length; k++){
  let nameStudent = students[k].name;
  names.push(nameStudent);
}
console.log(names);
for(let i=0; i < names.length; i++){
  document.writeln(`<p>Student ${names[i]} have this subjects:${subjects[i]}.</p>`);  
}
}
console.log(getSubject(students));

function getAverage(arr){
  arr.reduce((accumulator, currentEl) => {
    return summa = accumulator + currentEl;
  }, 0);
  let average = summa/arr.length;
  return average.toFixed(2);
}


function getAvarageMark(){
  let marks = [];
  let averageArr = [];
  let markStudents = {};
  for(let i=0; i< students.length;i++){
    let mark = Object.values(students[i].subjects);
    marks.push([].concat.apply([], mark));
  }
  for(k = 0; k < marks.length; k++){
    averageArr.push(getAverage(marks[k]));
  }
  console.log(averageArr);
  averageArr.forEach((mark, i) => {
    markStudents[students[i].name] = mark;
  });
  document.writeln(`<p>Students have this marks: </p>`);
  Object.entries(markStudents).map(([name, marks]) => {
    document.writeln(`<li>${name}: ${marks} </li>`);
  });
  return markStudents;
}
console.log(getAvarageMark());

function getStudentInfo(){
  let marks = [];
  let averageArr = [];
  let markStudents = [];
  for(let i=0; i< students.length;i++){
    let mark = Object.values(students[i].subjects);
    marks.push([].concat.apply([], mark));
  }
  for(k = 0; k < marks.length; k++){
    averageArr.push(getAverage(marks[k]));
  }
  console.log(averageArr);
  averageArr.forEach((cours, i, mark) => {
    markStudents.push({
     course: students[i].course,
     name: students[i].name,
     averageMark: mark[i]
   });
  });
  document.writeln(`<p>Information about students:</p>`);
  document.writeln(`<li>${Object.entries(markStudents[0])}</li>`);
  document.writeln(`<li>${Object.entries(markStudents[1])}</li>`);
  document.writeln(`<li>${Object.entries(markStudents[2])}</li>`);

  return markStudents;
}
console.log(getStudentInfo());
function getStudentsNames(){
  let result = [];
  students.forEach((name, i) => {
    result.push(students[i].name);
    result.sort();
  });
  document.writeln(`<p>Names of students in alphabetical order: ${result} </p>`);
  return result;
}
console.log(getStudentsNames());

function getBestStudent(){
 let markStudents = getAvarageMark();
 let max = 0;
 let bestStudent = 0;
 Object.keys(markStudents).forEach(key => {
  if(max < markStudents[key]){
    max = markStudents[key];
    bestStudent = key;
  }
});
 document.writeln(`<p>The best student: ${bestStudent} </p>`);
 return bestStudent;
}
console.log(getBestStudent());

function calculateWordLetters(word){
 let arr = word.split("");
  let lettersInWord = {};
  arr.forEach(current => {
    const count = arr.filter(letter => letter === current).length;
    lettersInWord[current] = count;
  });
  document.writeln(`<p>The number of letters in a word '${word}':</p>`);
  Object.entries(lettersInWord).map(([letter, number]) => {
    document.writeln(`<li>${letter}: ${number} </li>`);
  });
  return lettersInWord;
}
console.log(calculateWordLetters('test'));