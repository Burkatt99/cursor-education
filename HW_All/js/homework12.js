const planetButton = document.getElementById('getPlanet');
async function getPlanets(id){
	const res = await axios.get(`https://swapi.co/api/planets/?page=${id}`);
	console.log(res.data.results);
	return res.data.results;
}
async function renderPlanets(id){
	const container = document.querySelector('.characters');
	const planets = await getPlanets(`${id}`);
	planets.forEach((planet)=> {
		const planetDiv = document.createElement('div');
		planetDiv.classList.add('planet');
		planetDiv.innerHTML = `<h1>${planet.name}</h1>`
		container.append(planetDiv);
	});
}

planetButton.addEventListener('click',async()=>{
	await renderPlanets(1);
	planetButton.insertAdjacentHTML('afterend', `<button class = 'inform' id = 'next'>Next</button>`);
	const next = document.getElementById('next');
	next.addEventListener('click',async()=>{
		const planets = document.querySelector('.characters');
		const div = document.querySelectorAll('.planet');
		await div.forEach((div) =>{
			planets.removeChild(div);
		});
		renderPlanets(2);
		next.parentNode.removeChild(next);
		planetButton.insertAdjacentHTML('afterend', `<button class = 'inform' id = 'nextTwo'>Next</button>`);
		const nextTwo = document.getElementById('nextTwo');
		console.log(nextTwo);
		nextTwo.addEventListener('click',async()=>{
			const planets = document.querySelector('.characters');
			const div = document.querySelectorAll('.planet');
			div.forEach((div)=>{
				planets.removeChild(div);
			});
			renderPlanets(3);
		});
	});
});