function palindrome(str){
	var arr = str.split("");
	for(var i =0; i<arr.length/2; i++){
		if(arr[i] !== arr[arr.length-1-i]){
			return false;
		}
	}
	return true;
}
console.log(palindrome('racecar'))

function palindrome2(str){
	var arr = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
	arr = arr.split("");
	for(var i =0; i<arr.length/2; i++){
		if(arr[i] !== arr[arr.length-1-i]){
			return false;
		}
	}
	return true;
}
console.log(palindrome2('racecar'))
