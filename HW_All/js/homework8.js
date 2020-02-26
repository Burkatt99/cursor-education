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
			super();
			this.ourMarks = arrMarks;
			setInterval(() => console.log(this.getScholarship()), 30*1000);
		}
		getScholarship(){
			if((this.status === false)&&(this.getAverageMark() >= 4.0)){
				return 'You received 1400 UAH scholarships with marks: ' + this.ourMarks;
			} else {
				return 'You cannot receive a scholarship with marks: ' + this.ourMarks;
			}
		}
	}
const goodStudent = new BudgetStudent([5,5,4,5,4]);
const badStudent = new BudgetStudent([3,3,2,2,4]);
document.writeln(`<p>Answer for good student: ${goodStudent.getScholarship()}</p>`);
document.writeln(`<p>Answer for bad student: ${badStudent.getScholarship()}</p>`);
goodStudent.dismiss();
document.writeln(`<p>Answer for good student after expulsion from the university: ${goodStudent.getScholarship()}</p>`);
goodStudent.recover();
document.writeln(`<h2>See in console output result every 30 sec!!!</h2>`)