class Student{
	constructor(university, course, fullName){
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.ourMarks = [5, 4, 4, 5];
		this.status = false;
	}

	getInfo(){
		return 'Student ' + this.course + ' course ' + this.university + ', ' + this.fullName;
	}
	get marks(){
		if (this.status) {
			return null;
		} else {
			return this.ourMarks; }
		}
		set marks(value){
			return this.ourMarks.push(value); 
		}
		getAverageMark(){
			const summa = this.ourMarks.reduce((accumulator, mark) => {
				return accumulator + mark;
			}, 0);
			return (summa/this.ourMarks.length).toFixed(1);
		}
		dismiss(){
			this.status = true;
		}
		recover(){
			this.status = false;
		}
	}
	const firstStudent = new Student('Ivan Franko National University of Lviv', 4, 'Bura Tetiana');
	document.writeln(`<p>Information about student: ${firstStudent.getInfo()}</p>`);
	document.writeln(`<p>Array marks our student: ${firstStudent.marks}</p>`);
	firstStudent.marks = 5; 
	document.writeln(`<p>All marks our student after adding new mark: ${firstStudent.marks}</p>`);
	document.writeln(`<p>Avarage mark our student: ${firstStudent.getAverageMark()}</p>`);
	firstStudent.dismiss();
	document.writeln(`<p>Marks our student after expulsion from the university: ${firstStudent.marks}</p>`);
	firstStudent.recover();
	document.writeln(`<p>Marks our student after recovery at university: ${firstStudent.marks}</p>`);
	document.writeln('<h1>Advanvced</h1>');

	class BudgetStudent extends Student{
		constructor(arrMarks){
			this.ourMarks = arrMarks;
			setInterval(() => this.getScholarship(), 30*1000);
		}
		getScholarship(){
			if (firstStudent.getAverageMark() >= 4.0) {
				return 'You received 1400 UAH scholarships!';
			} else {
				return 'You cannot receive a scholarship!';
			}
		}
	}	
const myStudent = new BudgetStudent([4,3,5,5,4]);
console.log(myStudent);