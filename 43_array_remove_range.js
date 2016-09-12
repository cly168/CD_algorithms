function removerange(arr,x,y){
	for(var i = x; i<=y; i++){
		for(var k = x; k<arr.length; k++){
			arr[k] = arr[k+1];
		}
		arr.pop();
	}
	return arr;
}
removerange()