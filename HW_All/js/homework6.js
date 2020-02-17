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
  for(let i=0; i< students.length;i++){
   let sub = Object.keys(students[i].subjects);
  console.log(sub);
  let subjects = sub.map((subject) => subject[0].toUpperCase() + subject.slice(1).replace('_'," "));
  console.log(subjects); 
  let 
  }
  return srt = ''


/* let arr = [];
  let subjects = Object.keys(students.subjects).map((subject) => subject[0].toUpperCase() + subject.slice(1));
  console.log(subjects);
  const name = Object.values(students.name);
  subjects.split('_').join(" ");*/

}
 
console.log(getSubject(students));