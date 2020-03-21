const avatars = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.png','images/12.jpg','images/13.jpg','images/14.jpg','images/15.png','images/16.jpg'];
const butt = document.getElementById('getInf');
const find = document.getElementById('number');
const container = document.querySelector('.characters');
const planetButton = document.getElementById('getPlanet');
let page = 2;
async function getCharacters(id){
	const res = await axios.get(`https://swapi.co/api/films/${id}/`);
	return res.data.characters;
}
async function getPlanets(id){
	const res = await axios.get(`https://swapi.co/api/planets/?page=${id}`);
	console.log(res.data.results);
	return res.data.results;
}
async function renderCharactersFiveEpisod(id){
	const people = await getCharacters(`${id}`);
	console.log(people);
	for(let i = 0; i < people.length; i++){
		async function createCard(){
			const res = await axios.get(`${people[i]}`);
			const personDiv = document.createElement('div');
			personDiv.classList.add('person');
			personDiv.insertAdjacentHTML('beforeend', `
				<img src=${avatars[i]}>
				<p>${res.data.name}</p>
				<h3>${res.data.birth_year}</h3>
				<h6>${res.data.gender}</h6>`);
			container.append(personDiv);
		}
		createCard();
	}
}
async function renderCharactersAllEpisod(id){
	const people = await getCharacters(`${id}`);
	people.forEach(async(link)=> {
		const res = await axios.get(`${link}`);
		const personDiv = document.createElement('div');
		personDiv.classList.add('character');
		personDiv.innerHTML = `
		<p>${res.data.name}</p>
		<h3>${res.data.birth_year}</h3>
		<h6>${res.data.gender}</h6>`
		container.append(personDiv);
	});
}
butt.addEventListener('click',() =>{
	const numberEpisod = find.value;
	if(numberEpisod == 2){
		container.innerHTML = '';
		renderCharactersFiveEpisod(numberEpisod);
		find.value = '';
	} else {
		container.innerHTML = '';
		renderCharactersAllEpisod(numberEpisod);
		find.value = '';
	}
});
async function renderPlanets(id){
	container.innerHTML = '';
	const planets = await getPlanets(`${id}`);
	planets.forEach((planet)=> {
		const planetDiv = document.createElement('div');
		planetDiv.classList.add('planet');
		planetDiv.innerHTML = `<h1>${planet.name}</h1>`
		container.append(planetDiv);
	});
	page++;
	if(page == 8){
		next.parentNode.removeChild(next);
	} 
}
planetButton.addEventListener('click',async()=>{
	await renderPlanets(1);
	planetButton.insertAdjacentHTML('afterend', `<button class = 'inform' id = 'next'>Next</button>`);
	const next = document.getElementById('next');
	next.addEventListener('click',()=>{
		renderPlanets(page);
	});	
});
