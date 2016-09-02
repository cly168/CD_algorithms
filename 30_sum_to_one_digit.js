function sumToOne(num){
	var sum = 0;
	while(num != 0){
		sum+=num%10;
		num =Math.floor(num/10);
		if(sum>9 && num == 0){
			num = sum;
			sum = 0;
		}
	}
	console.log(sum);
}
sumToOne(928);