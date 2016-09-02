function rollOne(){
	Math.floor(Math.random()*6+1);
	return;
}
function playFives(num){
	for(var i=0; i<num; i++){
		var roll = rollOne();
			console.log(roll);
		if (roll == 5){
			console.log("That's good luck!");
		}
	}
}
function playStatsitics(){
	var min = 9;
	var max = 0;
	for(var i=0; i<8; i++){
		var roll = rollOne();
		if (roll<min){
			min = roll;
		}
		if (roll>max){
			max = roll;
		}
	}
}