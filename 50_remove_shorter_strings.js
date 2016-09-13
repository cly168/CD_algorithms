function removeshorterstrings(arr, x){
	// var newarr=[];
	for(var i = 0; i<arr.length; i++){
		if (arr[i].length < x){
			arr.splice(i,1)
			// for(var k=i; k<arr.length-1; k++){
			// 	arr[k]=arr[k+1];
			// }
			// arr.pop()
		}
	}
	return arr;
}
console.log(removeshorterstrings(['hi', 'hello', 'bye', 'yo', 'sup'], 3))