function getdigits(str){
	var arr = str.split("");
	var newarr =[];
	for(var i = 0; i<arr.length; i++){
		var int= parseInt(arr[i]);
		if(typeof int == 'number' && !isNaN(int)){
			newarr.push(int);
		}
	}
	newarr.join("");
	return newarr;
}
console.log(getdigits('1s!a3y5ew7h?'))