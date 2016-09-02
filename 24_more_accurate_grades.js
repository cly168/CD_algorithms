function lettergrade(score){
	var grade = '';
	if(score>=98){
		grade = 'A+';
	}
	else if (score>=94){
		grade = 'A';
	}
	else if(score>=90){
		grade = 'A-';
	}
	else if(score>=88){
		grade = 'B+';
	}
	else if (score>=84){
		grade = 'B';
	}
	else if(score>=80){
		grade = 'B-';
	}
	else if(score>=78){
		grade = 'C+';
	}
	else if (score>=74){
		grade = 'C';
	}
	else if(score>=70){
		grade = 'C-';
	}
	else if(score>=68){
		grade = 'D+';
	}
	else if (score>=64){
		grade = 'D';
	}
	else if(score>=60){
		grade = 'D-';
	}
	else{
		grade = 'F';
	}
	console.log('Score: '+score+ ' Grade: '+grade);
}