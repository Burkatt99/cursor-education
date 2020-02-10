
function getMaxDigit(number){
	const elements = number.split('');
	const maxNum = Math.max(...elements);
	return maxNum;		
}
document.writeln(`<p>Result function #1: ${getMaxDigit('5475')}.</p>`);

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
document.writeln(`<p>Result function #3: ${changeLetter('vLaD')}.</p>`);

function salaryWithTax(salary){
	const tax = 19.5;
	const percent = 100;
	return summa = (salary * (percent-tax))/percent;
}
document.writeln(`<p>Result function #4: ${salaryWithTax(1000)}.</p>`);

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}
document.writeln(`<p>Result function #5: ${randomNumber(1,10)}.</p>`);

function repeatLetter(wordWithRepeatLetter,letter){
	let n = 0;
	wordWithRepeatLetter = wordWithRepeatLetter.toLowerCase();
	for (let i = 0; i <= wordWithRepeatLetter.length; i++) {
		if (letter === wordWithRepeatLetter[i] ) {
			n+=1;
		}
	}
	return n;
}
document.writeln(`<p>Result function #6: ${repeatLetter('Ambasador', 'a')}.</p>`);

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
document.writeln(`<p>Result function #8: ${password(4)}.</p>`);


function deleteLettersFromWord(word, letter){
	word = word.split('');
	for (let i = 0; i <= word.length; i++) {
		if (letter === word[i] ) {
			word.splice(i,1);
		}
	}
	return word.join('');
}
document.writeln(`<p>Result function #9: ${deleteLettersFromWord('blablabla','a')}.</p>`);


function polyndrom(wordPolyndrom){
	wordPolyndrom = wordPolyndrom.toLowerCase().replace(/ /g, '').split('');
	for (let i = 0; i < wordPolyndrom.length; i++) {
		const letterFromStart = wordPolyndrom[i];
		const letterFromEnd = wordPolyndrom[wordPolyndrom.length - (i+1)];
		if (letterFromStart !== letterFromEnd) {
			return false;
		}
	}
	return true;
}
document.writeln(`<p>Result function #10: ${polyndrom('madam')}.</p>`);

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