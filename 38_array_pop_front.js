function popfront(arr){
	var temp = arr[0];
	for(var i = 0; i<arr.length; i++){
		arr[i] = arr[i+1];
	}
	arr.pop()
	return temp;
}
popfront();