	const title = document.getElementById('title');
	let equare = document.createElement('div');
	title.after(equare);
	equare.innerHTML = '<div class = "mini"></div>'.repeat(25);
	console.log(equare);
	function generateBlocks(){
		const miniEquare = document.getElementsByClassName('mini');
		Array.from(miniEquare).forEach( (el) => {
			el.style.background = '#'+Math.random().toString(16).slice(2,8);
		});
	}
 function generateBlocksInterval(){
 	setInterval(() => generateBlocks(),1000);
 }
 generateBlocksInterval();
/*
document.body.insertAdjacentHTML('beforeend', '<div id="cont">'+'<div></div>'.repeat(25)+'</div>');
document.querySelectorAll('#cont>div').forEach(el=>{
	el.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
});*/