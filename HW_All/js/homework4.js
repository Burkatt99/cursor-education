const students = ["Sasha", "Igor","Oleksiy" , "Ira", "Lena", "Svitlana"];
const themes = ["Differential equations", "Theory of Automata", "Algorithms and data structures"];
const marks = [4, 5, 5, 3, 4, 5];
function coupleFriends(names){
	const couple = [];
	const arr = [];
	let k = 0;
	for(let i = 0; i < names.length/2;i++){
		arr[k] = [names[i],names[i + names.length/2]];
		couple.push(arr[k]);
		k++;
	}
	return couple;
}
console.log(coupleFriends(students));
const couples = coupleFriends(students);
document.writeln('<h3>Function #1:<h3>')
for(let j = 0; j < couples.length;j++ ){
	document.writeln(`<p>Couple: ${couples[j]}.</p>`);
}

function projectSciennce(couple,theme){
	const project = [];
	const names = [];
	for(let i=0;i<couple.length; i++){
		names.push(couple[i].join(' and '));
	}
	for( let j = 0; j < theme.length; j++){
		project.push([names[j],theme[j]]);
	}
	return project;
}
console.log(projectSciennce(couples,themes));
const namesAndThemes = projectSciennce(couples,themes);
document.writeln('<h3>Function #2:<h3>')
for(let i = 0; i<namesAndThemes.length; i++){
	document.writeln(`<li>Project: ${namesAndThemes[i]}.</li>`);
}


function markForStudent(names,mark){	
	const markStudent = [];
	for( let i = 0; i < names.length; i++){
		markStudent.push([names[i],mark[i]]);
	}
	return markStudent;
}
console.log(markForStudent(students,marks));

const studentWithMark = markForStudent(students,marks);

document.writeln('<h3>Function #3:<h3>');
document.writeln('<p>Marks:<p>');
for(let i = 0; i<studentWithMark.length; i++){
	document.writeln(`<li>${studentWithMark[i]}.</li>`);
}

function randomMark(arr){
	const arrayMark = [];
	const maxMark = 5;
	const minMark = 1;
	for(let i=0; i<arr.length;i++){
		arrayMark.push(Math.floor(Math.random() * (maxMark - minMark) + minMark));
	}
	return arrayMark;
}
console.log(randomMark(namesAndThemes));
const randMark = randomMark(namesAndThemes);
function randomMarksForProject(student){
	const markForProject = [];
	for( let i = 0; i < randMark.length; i++){
		student[i].push(randMark[i]);
		markForProject.push([student[i]]);
	}
	return markForProject;
}
const allProject = randomMarksForProject(namesAndThemes);
console.log(allProject);
document.writeln('<h3>Function #4:<h3>');
for(let i = 0; i<allProject.length; i++){
	document.writeln(`<p>Project: ${allProject[i]}.</p>`);
}
