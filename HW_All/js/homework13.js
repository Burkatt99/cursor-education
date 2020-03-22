const counter = document.getElementById('getNum');
const smallFont = document.getElementById('less');
const bigFont = document.getElementById('big'); 
const numDiv = document.querySelector('.counter');
const words = document.getElementById('words');
function* getNumber(){
	let i = 0;
	while(true){
		yield i++;
	}
}
const number = getNumber();
counter.addEventListener('click',()=>{
	const result = number.next().value;
	numDiv.innerHTML = `<p>${result}</p>`
});
function* newFontGenerator(size_font){
	while(true){
		let size = yield size_font;
		if(size === "up"){
			size_font += 3;
		}
		if(size === "down"){
			size_font -= 3;
		}
	}
}
const sizeFont = 48;
const fontGenerator = newFontGenerator(sizeFont);
bigFont.addEventListener('click', ()=>{
	const result = fontGenerator.next('up').value;
	words.style.fontSize = result + "px";
});
smallFont.addEventListener('click', ()=>{
	const result = fontGenerator.next('down').value;
	words.style.fontSize = result + "px";
});

