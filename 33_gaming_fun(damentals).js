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
	console.log(min,max);
}
function playStatistics2(){
	var min = 9;
	var max = 0;
	var sum = 0;
	for(var i=0; i<8; i++){
		var roll = rollOne();
		if (roll<min){
			min = roll;
		}
		if (roll>max){
			max = roll;
		}
		sum += roll;
	}
	console.log(min,max,sum);
}
function playStatistics3(num){
	var min = 9;
	var max = 0;
	var sum = 0;
	for(var i=0; i<num; i++){
		var roll = rollOne();
		if (roll<min){
			min = roll;
		}
		if (roll>max){
			max = roll;
		}
		sum += roll;
	}
	console.log(min,max,sum);
}
function playStatistics4(num){
	var min = 9;
	var max = 0;
	var sum = 0;
	for(var i=0; i<num; i++){
		var roll = rollOne();
		if (roll<min){
			min = roll;
		}
		if (roll>max){
			max = roll;
		}
		sum += roll;
	}
	avg = sum / num;
	console.log(min,max,avg);
}