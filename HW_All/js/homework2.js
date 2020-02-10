
let numN = Number(prompt("Write number:"));

function checkNum(num){
	while (!Number.isInteger(num)) {
		num = Number(prompt("You write bad number. Please change:"));	
	} 
}
checkNum(numN);
let numM = Number(prompt("Write yet one number"));
checkNum(numM);

const even = confirm("Skippinng even numbers?");
function sumNotEven(){
	let sumWithout = 0;
	for( ; numN <= numM; numN++){
		if (numN % 2 === 0)
			continue;
		sumWithout += numN;			 
	}
	document.writeln(`<p>N + M without even numbers = ${sumWithout}.</p>`);	}


	function checkEven(){
		let summa = 0;
		if (even) {
			sumNotEven();
		} else {	
			for(; numN <= numM; numN++){
				summa += numN;
			}
			document.writeln(`N + M with even numbers = ${summa}.`);
		}
		
	}
	checkEven();




