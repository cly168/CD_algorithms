function significant(num){
    while (num>=10){
        num/=10;
    }
    while (num<1 && num>0){
        num*=10;
    }
    while (num<0 && num>-1){
        num*=10;
    }
    while(num<=-10){
        num /=10;
    }
    num %= 10;
    return num;
}
significant();
