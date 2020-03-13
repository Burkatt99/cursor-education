const donut_strawberry = document.getElementById('strawberry');
const donut_milk = document.getElementById('milk');
const donut_banana = document.getElementById('banana');
const donut_lemon = document.getElementById('strawberry');
const donut_chokolate = document.getElementById('strawberry');
const donut_raspberry = document.getElementById('raspberry');
function soundEating(sound){
	const myAudio = new Audio;
	myAudio.src = sound;
	myAudio.play();
	return false;
}
function getSound(){
	if(donut_strawberry){
		donut_strawberry.addEventListener('click',() =>{
			donut_strawberry.currrentTime = 0;
			soundEating("sounds/sound1.wav");
		});
	}
	if(donut_milk){
		donut_milk.addEventListener('click',() =>{
			donut_milk.currrentTime = 0;
			soundEating("sounds/sound2.mp3");
		});
	}
	if(donut_banana){
		donut_banana.addEventListener('click',() =>{
			donut_banana.currrentTime = 0;
			soundEating("sounds/sound3.wav");
		});
	}
	if(donut_lemon){
		donut_lemon.addEventListener('click',() =>{
			donut_lemon.currrentTime = 0;
			soundEating("sounds/sound4.wav");
		});
	}
	if(donut_chokolate){
		donut_chokolate.addEventListener('click',() =>{
			donut_chokolate.currrentTime = 0;
			soundEating("sounds/sound5.wav");
		});
	}
	if(donut_raspberry){
		donut_raspberry.addEventListener('click',() =>{
			donut_raspberry.currrentTime = 0;
			soundEating("sounds/sound6.wav");
		});
	}
}
getSound();