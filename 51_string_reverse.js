function reverse(str){
	var arr = str.split("");
	for(var i = 0; i<arr.length/2; i++){
		var temp = arr[arr.length-1-i];
		arr[arr.length-1-i] = arr[i];
		arr[i] = temp;
	}
	return arr.join("");
}
reverse()