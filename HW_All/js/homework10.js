const donut_strawberry = document.getElementById('strawberry');
const donut_milk = document.getElementById('milk');
const donut_banana = document.getElementById('banana');
const donut_lemon = document.getElementById('lemon');
const donut_chokolate = document.getElementById('chokolate');
const donut_raspberry = document.getElementById('raspberry');
const sounds = [new Audio('sounds/sound1.wav'),new Audio('sounds/sound2.mp3'),new Audio('sounds/sound3.wav'),new Audio('sounds/sound4.mp3'),new Audio('sounds/sound5.wav'),new Audio('sounds/sound6.mp3')]

function soundEating(sound,status){
	sound.currentTime = 0;
	sound.play();	
	}
function getSound(){
	if(donut_strawberry){
		donut_strawberry.addEventListener('click',() =>{
			soundEating(sounds[0]);
			donut_strawberry.style.border = '1px solid pink';
		});
	}
	if(donut_milk){
		donut_milk.addEventListener('click',() =>{
			soundEating(sounds[1]);
		});
	}
	if(donut_banana){
		donut_banana.addEventListener('click',() =>{
			soundEating(sounds[2]);
		});
	}
	if(donut_lemon){
		donut_lemon.addEventListener('click',() =>{
			soundEating(sounds[3]);
		});
	}
	if(donut_chokolate){
		donut_chokolate.addEventListener('click',() =>{
			soundEating(sounds[4]);
		});
	}
	if(donut_raspberry){
		donut_raspberry.addEventListener('click',() =>{
			soundEating(sounds[5]);
		});
	}
}
getSound();
function getKey(){
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyF'){
			soundEating(sounds[0]);
		}
	});
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyG'){
			soundEating(sounds[1]);
		}
	});
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyH'){
			soundEating(sounds[2]);
		}
	});
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyJ'){
			soundEating(sounds[3]);
		}
	});
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyK'){
			soundEating(sounds[4]);
		}
	});
	document.addEventListener('keydown',function(event){
		if(event.code == 'KeyL'){
			soundEating(sounds[5]);
		}
	});
}
getKey();