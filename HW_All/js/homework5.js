function getRandomArray(length, min, max){
	let arr = [];
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

function getModa(){
	const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
	let sameNumber = {};
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
console.log(getModa());
document.writeln(`<p>Result function #2: Moda = ${getModa()}.</p>`);

function getAverage(){
	const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
	arr.reduce((accumulator, currentEl) => {
    // console.log('accumulator', accumulator);
    return summa = accumulator + currentEl;
}, 0);
	return average = summa/arr.length;
}
console.log(getAverage());
document.writeln(`<p>Result function #3: Average = ${getAverage()}.</p>`);

function getMedian(){
	const arr = [1, 2, 3, 4];
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
console.log(getMedian());
document.writeln(`<p>Result function #4: Median = ${getMedian()}.</p>`);

function filterEvenNumber(){
	const arr = [1, 2, 3, 4, 5, 6];
	const findEvenNum = arr.filter((number) => number%2 !== 0);
	return findEvenNum;
}
console.log(filterEvenNumber());
document.writeln(`<p>Result function #5: Even Number = ${filterEvenNumber()}.</p>`);

function countPositiveNumbers(){
	const arr = [1, -2, 3, -4, -5, 6, 7];
	const withoutNegativeNum = arr.filter((number) => number > 0);
	return withoutNegativeNum.length;
} 
console.log(countPositiveNumbers());
document.writeln(`<p>Result function #6: Positive number = ${countPositiveNumbers()}.</p>`);

function getDivideByFive(){
	const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
	const numbers = arr.filter((number) => number%5 === 0);
	return numbers;
}
console.log(getDivideByFive());
document.writeln(`<p>Result function #7: ${getDivideByFive()}.</p>`);

function replaceBadWords(){
	const string = "Are you fucking kidding shift?";
	const badWords = /fuck|shift/gi;
	let newString = string.replace(badWords,"****");
	return newString;
}
console.log(replaceBadWords());
document.writeln(`<p>Result function #8: ${replaceBadWords()}</p>`);

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