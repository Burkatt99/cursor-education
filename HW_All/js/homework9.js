
	const title = document.getElementById('title');
	let equare = document.createElement('div');
	equare.style.width = '250px';
	equare.style.height = '250px';
	title.after(equare);
	equare.innerHTML = '<div class = "mini"></div>'.repeat(25);
	const miniEquare = document.getElementsByClassName('mini');
	miniEquare.forEach( (el) => {
		el.style.background = '#'+Math.random().toString(16).slice(2,8);
	});

	
/*
document.body.insertAdjacentHTML('beforeend', '<div id="cont">'+'<div></div>'.repeat(25)+'</div>');
document.querySelectorAll('#cont>div').forEach(el=>{
	el.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
});*/