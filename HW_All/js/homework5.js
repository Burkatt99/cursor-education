
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

function getAverage(){
	const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
	arr.reduce((accumulator, currentEl) => {
    // console.log('accumulator', accumulator);
    return summa = accumulator + currentEl;
}, 0);
	return average = summa/arr.length+1;
}
console.log(getAverage());

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

function filterEvenNumber(){
	const arr = [1, 2, 3, 4, 5, 6];
	const findEvenNum = arr.filter((number) => number%2 !== 0);
	return findEvenNum;
}
console.log(filterEvenNumber());

function countPositiveNumbers(){
	const arr = [1, -2, 3, -4, -5, 6, 7];
	const withoutNegativeNum = arr.filter((number) => number > 0);
	return withoutNegativeNum.length;
} 
console.log(countPositiveNumbers());

function getDivideByFive(){
	const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
	const numbers = arr.filter((number) => number%5 === 0);
	return numbers;
}
console.log(getDivideByFive());

/*function replaceBadWords(){
	const string = "Are you fucking kidding?";
	string.toLowerCase.split(" ");
	const badWord = string =>{
		for(let i=0; i <= string.length;i++){
			if(string[i] === 'fuck' || string[i] === 'shit'){
				string[i] = "****";
				}
			}
			console.log(string.find(badWord));
		}
	return string.join(" ");
	}

console.log(replaceBadWords());*/
function divideByThree(word){
	word.toLowerCase().split(" ");

}
console.log(divideByThree("Commander"));