function nthtolast(arr,i){
	if(arr.length<i){
		return null;
	}
	else{
		return arr[arr.length-i];
	}
}
nthtolast();