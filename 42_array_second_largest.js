function secondlargest(arr){
	if(arr.length < 2){
		return null;
	}
	max = arr[0];
	sec = null;
	for(var i =1; i<arr.length; i++){
		if(arr[i]> max){
			sec = max;
			max = arr[i];
		}
		else if(sec == null || (arr[i]<=max && arr[i]>sec)){
			sec = arr[i];
		}
	}
	return sec;
}
secondlargest()