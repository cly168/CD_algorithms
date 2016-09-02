function whatHappensToday(){
	var outcome = Math.floor(Math.random()*100+1);
	if(outcome<=10){
		console.log('volcano');
	}
	else if(outcome<=25){
		console.log('tsunami');
	}
	else if(outcome<=45){
		console.log('earthquake');
	}
	else if(outcome<=70){
		console.log('blizzard');
	}
	else{
		console.log('meteor strike');
	}
}