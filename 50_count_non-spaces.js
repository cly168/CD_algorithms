function countnonspaces(str){
	var arr = str.split("");
	var count =0
	for(var i =0; i<arr.length; i++){
		if(arr[i] !== " ")
			count++
	}
	console.log(count);

}
countnonspaces('Honey pie, you')