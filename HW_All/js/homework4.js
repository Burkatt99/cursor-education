const students = ["Sasha", "Igor","Oleksiy" , "Ira", "Lena", "Svitlana"];
const themes = ["Differential equations", "Theory of Automata", "Algorithms and data structures"];
const marks = [4, 5, 5, 3, 4, 5];
let couple = [];
function coupleFriends(){
	let arr = [];
	let k = 0;
	for(let i = 0; i < students.length/2;i++){
		arr[k] = [students[i],students[i + students.length/2]];
		couple.push(arr[k]);
		k++;
	}
	return couple;
}
console.log(coupleFriends());
document.writeln('<h3>Function #1:<h3>')
document.writeln(`<p>First couple: ${couple[0]}.</p>`);
document.writeln(`<p>Second couple: ${couple[1]}.</p>`);
document.writeln(`<p>Third couple: ${couple[2]}.</p>`);

let project = [];
function projectSciennce(){
	const stringOne = couple[0].join(' and ');
	const stringTwo = couple[1].join(' and ');
	const stringThree = couple[2].join(' and ');
	let names = [];
	names.push(stringOne,stringTwo,stringThree);
	for( let i = 0; i < themes.length; i++){
		project.push([names[i],themes[i]]);
	}
	return project;
}
console.log(projectSciennce());
document.writeln('<h3>Function #2:<h3>')
document.writeln(`<p>First project: ${project[0]}.</p>`);
document.writeln(`<p>Second project: ${project[1]}.</p>`);
document.writeln(`<p>Third project: ${project[2]}.</p>`);

let markStudent = [];
function markForStudent(){	
	for( let i = 0; i < students.length; i++){
		markStudent.push([students[i],marks[i]]);
	}
	return markStudent;
}
console.log(markForStudent());
document.writeln('<h3>Function #3:<h3>')
document.writeln('<p>Marks:<p>');
document.writeln(`<li> ${markStudent[0]}.</li>`);
document.writeln(`<li> ${markStudent[1]}.</li>`);
document.writeln(`<li> ${markStudent[2]}.</li>`);
document.writeln(`<li> ${markStudent[3]}.</li>`);
document.writeln(`<li> ${markStudent[4]}.</li>`);
document.writeln(`<li> ${markStudent[5]}.</li>`);

let markForProject = [];
function randomMarksForProject(){
	projectSciennce();
	const maxMark = 5;
	let arrayMark = [];
	arrayMark.push(Math.floor(Math.random()*maxMark), Math.floor(Math.random()*maxMark),Math.floor(Math.random()*maxMark));
	console.log(arrayMark);
	for( let i = 0; i < 3; i++){
		project[i].push(arrayMark[i]);
		markForProject.push([project[i]]);
	}
	return markForProject;
}
console.log(randomMarksForProject());
document.writeln('<h3>Function #4:<h3>')
document.writeln(`<p>Project with mark: ${markForProject[0]}.</p>`);
document.writeln(`<p>Project with mark: ${markForProject[1]}.</p>`);
document.writeln(`<p>Project with mark: ${markForProject[2]}.</p>`);
