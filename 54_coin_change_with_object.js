function coinchangewithobject(coins){
	var quarter = Math.floor(coins/25);
	coins %= 25;
	var dime = Math.floor(coins/10);
	coins %= 10;
	var nickel = Math.floor(coins/5);
	coins %= 5;
	var penny = coins
	var result = {'quarter':quarter, 'dime':dime, 'nickel':nickel, 'penny':penny}
	return result
}
console.log(coinchangewithobject(92))