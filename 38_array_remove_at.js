function removeat(arr,i){
	var temp = arr[i]
	for(var k=i; k<arr.length-1; k++){
		arr[k] = arr[k+1];
	}
	arr.pop();
	console.log(arr);
	return temp;
}
removeat();