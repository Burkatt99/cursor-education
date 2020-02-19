function getRandomArray(length, min, max){
	const arr = [];
	for (let i=0; i < length; i++){
		arr.push(Math.random() * (max - min + 1) + min);
	}
	const arrRand = arr.map((number) =>{
		return Math.floor(number);
	});
	return arrRand;
}
console.log(getRandomArray(15,1,100));
document.writeln(`<p>Result function #1: ${getRandomArray(15,1,100)}.</p>`);

function getModa(arr){
	const sameNumber = {};
	arr.forEach(current => {
		const count = arr.filter(n => n === current).length;
		sameNumber[current] = count;
	});
	let max = 0;
	let moda = 0;
	Object.keys(sameNumber).forEach(key => {
		if(max < sameNumber[key]){
			max = sameNumber[key];
			moda = key;
		}
	});
	return moda;
}
console.log(getModa([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));
document.writeln(`<p>Result function #2: Moda = ${getModa([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2])}.</p>`);

function getAverage(arr){
	arr.reduce((accumulator, currentEl) => {
    return summa = accumulator + currentEl;
}, 0);
	return average = summa/arr.length;
}
console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));
document.writeln(`<p>Result function #3: Average = ${getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2])}.</p>`);

function getMedian(arr){
	const sortArray = arr.sort((a,b) => a - b);
	console.log(arr);
	let mediana = 0;
	const middle = Math.floor(arr.length/2);
	if(arr.length%2 !== 0){
		mediana = arr[middle];
	} else {
		mediana = (arr[middle]+arr[middle-1])/2;
	}
	return mediana;
}
console.log(getMedian([1, 2, 3, 4]));
document.writeln(`<p>Result function #4: Median = ${getMedian([1, 2, 3, 4])}.</p>`);

function filterEvenNumber(arr){
	const findEvenNum = arr.filter((number) => number%2 !== 0);
	return findEvenNum;
}
console.log(filterEvenNumber([1, 2, 3, 4, 5, 6]));
document.writeln(`<p>Result function #5: Even Number = ${filterEvenNumber([1, 2, 3, 4, 5, 6])}.</p>`);

function countPositiveNumbers(arr){
	const withoutNegativeNum = arr.filter((number) => number > 0);
	return withoutNegativeNum.length;
} 
console.log(countPositiveNumbers([1, -2, 3, -4, -5, 6, 7]));
document.writeln(`<p>Result function #6: Positive number = ${countPositiveNumbers([1, -2, 3, -4, -5, 6, 7])}.</p>`);

function getDivideByFive(arr){
	const numbers = arr.filter((number) => number%5 === 0);
	return numbers;
}
console.log(getDivideByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));
document.writeln(`<p>Result function #7: ${getDivideByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2])}.</p>`);

function replaceBadWords(string){
	const badWords = /fuck|shift/gi;
	let newString = string.replace(badWords,"****");
	return newString;
}
console.log(replaceBadWords("Are you fucking kidding shift?"));
document.writeln(`<p>Result function #8: ${replaceBadWords("Are you fucking kidding shift?")}</p>`);

function divideByThree(word){
	const arr = word.toLowerCase().split(" ");
	let result = [];
	if (word.length > 3) {
		const wordSyllable = arr.map((letter) => {
			for(let i = 0; i < letter.length; i += 3){
				result.push(letter.slice(i,i + 3)); 
			}
		});
	}
		return result;
}
console.log(divideByThree("Commander"));
document.writeln(`<p>Result function #9: ${divideByThree("Commander")}.</p>`);