function generateBlocks(){
	const title = document.getElementById('title');
	const square = document.createElement('div');
	title.after(square);
	square.innerHTML = '<div class = "mini"></div>'.repeat(25);
}

function generateColorForBlocks(){	
	const miniSquare = document.getElementsByClassName('mini');
	const color = 255;
	const randomValue = () => Math.round(Math.random() * color);
	Array.from(miniSquare).forEach( (el) => {
		el.style.background = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
	});
}
function generateBlocksInterval(){
	generateBlocks();
	setInterval(() => generateColorForBlocks(),1000);
}
generateBlocksInterval();
