function concat(arr1, arr2){
	var newarr = []; 
	for(var i = 0; i<arr1.length; i++){
		newarr.push(arr1[i]); 
	}
	for(var i = 0; i<arr2.length; i++){
		newarr.push(arr2[i]);
	}
	return newarr;
}
concat();
