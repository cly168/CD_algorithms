function acronyms(str){
	str= str.toUpperCase();
	var word = str.split(" ");
	var letter = '';
	for(var i = 0; i<word.length; i++){
		letter +=word[i][0];
	}
	return(letter);
}
console.log(acronyms('theres - no free!'))