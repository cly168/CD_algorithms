function insertat(arr,i,x){
	for(var k=arr.length; k>i; k--){
		arr[k]=arr[k-1];
	}
	arr[i] = x;
	return arr;
}
insertat();