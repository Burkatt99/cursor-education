let number = prompt("Write to number, please:");
let wordForChange = prompt("Write word please:");
let salary = prompt("Write please your salary!");
let min = prompt("Write minimum number");
let	max = prompt("Write maximum number");
let wordWithRepeatLetter = prompt("write word for check").split('');
let lengthPassword = prompt('Write to length for your password');
let wordForDelete = prompt('Write please your word').split('');
let wordPolyndrom = prompt('Write please your word for check').toLowerCase().replace(/ /g, '').split('');

function getMaxDigit(number){
	const elements = number.split('');
	const maxNum = Math.max(...elements);
	return maxNum;		
}
document.writeln(`<p>Result function #1: ${getMaxDigit()}.</p>`);

function rowNumber(number, row){
	if(row === 0){
		return 1;
	}
	let result = number;
	for (let i = 0; i < row; i++) {
		result *= number;
	}
	return result;
}
document.writeln(`<p>Result function #2: ${rowNumber(2,5)}.</p>`);

function changeLetter(wordForChange){
	return wordForChange[0].toUpperCase() + wordForChange.slice(1).toLowerCase();		
}
document.writeln(`<p>Result function #3: ${changeLetter()}.</p>`);

function salaryWithTax(salary){
	const tax = 19.5;
	const percent = 100;
	return summa = (salary * (percent-tax))/percent;
}
document.writeln(`<p>Result function #4: ${salaryWithTax()}.</p>`);

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}
document.writeln(`<p>Result function #5: ${randomNumber()}.</p>`);

function repeatLetter(wordWithRepeatLetter){
	const letter = prompt("Which letter need to check?");
	let n = 0;
	for (let i = 0; i <= wordWithRepeatLetter.length; i++) {
		if (letter === word[i] ) {
			n+=1;
		}
	}
	return n;
}
document.writeln(`<p>Result function #6: ${repeatLetter()}.</p>`);

/* не розпізнає символ
let money = prompt('How much money do you have?').toLowerCase();
function currency(money){
	const dollar = 25;
	
	if (money.indexOf('$') + 1) {

		let summa = money.slice(0, -1) * dollar;
		console.log(summa)
	} else {
		summa = money/dollar;
	}
	return summa;
}
document.writeln(`<p>Result function #7: ${currency()}.</p>`);*/

function password(lengthPassword){
	let arrForNumber = [];
	console.log(lengthPassword);
	if(lengthPassword === ''){
		lengthPassword = 8;
	}
	for(let i=0; i<lengthPassword;i++){
		const randomNumber = Math.random()*10;
		arrForNumber.push(Math.round(randomNumber));
	}
	return arrForNumber.join('');
}
document.writeln(`<p>Result function #8: ${password()}.</p>`);


function deleteLettersFromWord(wordForDelete){
	const letter = prompt('Write please letter for delete');
	for (let i = 0; i <= wordForDelete.length; i++) {
		if (letter === wordForDelete[i] ) {
			wordForDelete.splice(i,1);
		}
	}
	return wordForDelete.join('');
}
document.writeln(`<p>Result function #9: ${deleteLettersFromWord()}.</p>`);


function polyndrom(wordPolyndrom){
	for (let i = 0; i < wordPolyndrom.length; i++) {
		const letterFromStart = wordPolyndrom[i];
		const letterFromEnd = wordPolyndrom[wordPolyndrom.length - (i+1)];
		if (letterFromStart !== letterFromEnd) {
			return false;
		}
	}
	return true;
}
document.writeln(`<p>Result function #10: ${polyndrom()}.</p>`);

/* як порівнювати всі елементи
function moreTwoLetter(){
	const word = prompt('Write please your word').split('');
	let newWord = [];
	let k = 0;
	for (let i = 0; i < elements.length; i++) {
		let letter = word[i+1];
		if (word[i] !== word[i+1]) 
			newWord.push(letter);
	}
}*/