function shuffle(arr){
	for(var i = 0; i<arr.length; i++){
		var k = Math.floor(Math.random()*arr.length-1+1);
		var temp = arr[k];
		arr[k] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
shuffle();