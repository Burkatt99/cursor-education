function getChineseSymbol(){
	return new Promise((resolve) => {
		const time = 50;
		setTimeout(() =>{
			const numbers = String(Date.now());
			const sign = numbers.substr(numbers.length-5);
			resolve(String.fromCharCode(sign));
		},time)
	});
}
getChineseSymbol();
async function getRandomChinese(length){
	let str = '';
	let i = 0;
	while (i<length) {
		await getChineseSymbol().then((res) =>{
			str += res;
		});
		i++;
	}
	return str;	
}
getRandomChinese(10).then(chineStr =>{
	const res = document.getElementById('result');
	res.innerText = `Chinese symbols: ${chineStr}`
}).catch((err)=> {
	console.log(`something error:` + err);
});	