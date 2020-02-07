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
	const word = prompt("Write word please:")
	const change = word.toLowerCase();
	
}