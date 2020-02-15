function getMaxDigit(){
	const number = prompt("Write to number, please:");
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

function changeLetter(){
	const word = prompt("Write word please:");
	return word[0].toUpperCase() + word.slice(1).toLowerCase();		
}
document.writeln(`<p>Result function #3: ${changeLetter()}.</p>`);

function salaryWithTax(){
	const salary = prompt("Write please your salary!");
	const tax = 19.5;
	const percent = 100;
	 return summa = (salary * (percent-tax))/percent;
}
document.writeln(`<p>Result function #4: ${salaryWithTax()}.</p>`);

function randomNumber() {
  min = prompt("Write minimum number");
  max = prompt("Write maximum number");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.writeln(`<p>Result function #5: ${randomNumber()}.</p>`);

function repeatLetter(){
	const word = prompt("write word for check").split('');
	const letter = prompt("Which letter need to check?");
	let n = 0;
	for (let i = 0; i <= word.length; i++) {
		    if (letter === word[i] ) {
			  n+=1;
		}
	}
return n;
}
document.writeln(`<p>Result function #6: ${repeatLetter()}.</p>`);

function currency(){
	let money = prompt('How much money do you have?').toLowerCase();
	const dollar = 25;
	
	if (money.indexOf('$') + 1) {

	let summa = money.slice(0, -1) * dollar;
	console.log(summa)
		} else {
	summa = money/dollar;
		}
return summa;
}
document.writeln(`<p>Result function #7: ${currency()}.</p>`);

function password(){
	let lengthPassword = prompt('Write to length for your password');
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