function filterrange(arr,min,max){
	for(var i=0; i<arr.length; i++){
		if(arr[i]>min && arr[i]<max){
			for(var k=i; k<arr.length; k++){
				arr[k]=arr[k+1];
			}
			arr.length--;
			i--;
		}
	}
	return arr;
}
console.log(filterrange([1,2,3,4,5,6,7],3,6))