function zipit(arr, arr2){
	var newarr = []
	if (arr.length <= arr2.length){
		for(var i = 0; i<arr.length; i++){
			newarr.push(arr[i]);
			newarr.push(arr2[i]);
		}
		for (var k = arr.length; k<arr2.length; k++){
			newarr.push(arr2[k]);
		}
	}
	else{
		for(var i = 0; i<arr2.length; i++){
			newarr.push(arr[i]);
			newarr.push(arr2[i]);
		}
		for (var k = arr2.length; k<arr.length; k++){
			newarr.push(arr[k]);
		}
	} 
	return newarr;
}
zipit()