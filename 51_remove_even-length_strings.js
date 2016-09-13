function removeeven(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i].length % 2 == 0){
			arr.splice(i,1)
		}
	}
	return arr;
}
console.log(removeeven(['hi', 'hellos', 'boy', 'were']))