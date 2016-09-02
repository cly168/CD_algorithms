function threesandfives(start, end){
	var sum = 0;
	for(var i=start; i<=end; i++){
		if(i % 3 ==0 && i % 5 ==0){
			continue;
		}
		if(i % 3 == 0 || i % 5 == 0){
			sum+=i;
		}
	}
	console.log(sum);
}
threesandfives(100,4000000);