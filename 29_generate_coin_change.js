function generateCoinChange(cents){
	var quarter = Math.floor(cents/25);
	cents = cents % 25;
	var dime = Math.floor(cents/10);
	cents = cents % 10;
	var nickel = Math.floor(cents/5);
	cents = cents % 5;
	var penny = Math.floor(cents);
	console.log('quarters: '+quarter+' dimes: '+dime+' nickel: '+nickel+' pennies: '+penny);
}
generateCoinChange();

function generateCoinChange2(cents){
	var coins = [25,10,5,1];
	for(var i = 0; i<coins.length; i++){
		var temp = Math.floor(cents/coins[i]);
		cents = cents % coins[i];
		coins[i] = temp;
	}
	console.log('quarters: '+coins[0]+' dimes: '+coins[1]+' nickel: '+coins[2]+' pennies: '+coins[3]);
}
generateCoinChange2();