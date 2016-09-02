function sweatshirtPricing(num){
	var cost = 0;
	if(num >= 4){
		cost = Math.ceil(num*20*.65);
	}
	else if(num == 3){
		cost = Math.ceil(num*20*.81);
	}
	else if(num == 2){
		cost = Math.ceil(num*20*.91);
	}
	else if(num == 1){
		cost = 20;
	}
	return cost;
}
console.log(sweatshirtPricing(0));