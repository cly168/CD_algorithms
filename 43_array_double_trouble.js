function doubletrouble(arr){
	for(var i = 0; i<arr.length; i+=2){
		for(var k =arr.length; k >i; k--){
			arr[k] = arr[k-1];
		}
	}
	return arr
}

console.log(doubletrouble([1,2,3,4,5]))