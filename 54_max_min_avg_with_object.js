function maxminavgobject(arr){
	var min = arr[0];
	var max = arr[0];
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]<min){
			min = arr[i];
		}
		if(arr[i]>max){
			max = arr[i];
		}
		sum +=arr[i];
	}
	var avg = sum/arr.length;
	var result = {'min':min, 'max':max, 'avg':avg}
	return result;
}
console.log(maxminavgobject([1,2,3]))