function rotateArr(arr,shiftBy){
	for(var i = 0; i<shiftBy; i++){
		for(var k = arr.length; k>0; k--){
			arr[k] = arr[k-1];
		}
		arr[0] = arr[arr.length-1];
		arr.pop();
	}
	return arr;
}
rotateArr();
