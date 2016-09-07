function nthlargest(arr,n){
	if(arr.length<n || n==0){
		return null;
	}
	for(var i =0; i<arr.length; i++){
		for(var k=0; k<arr.length-i; k++){
			if(arr[k]>arr[k+1]){
				temp = arr[k+1];
				arr[k+1] = arr[k];
				arr[k] = temp;
			}
		}
	}
	console.log(arr[arr.length-n])
}
nthlargest()