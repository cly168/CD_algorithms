function dice(){
    var roll= Math.floor(Math.random()*20+1);
    var arr=[];
    arr.push(roll);

    roll=Math.floor(Math.random()*20+1);
    var min=arr[0];
    var max=arr[0];
    var sum=0;
    while(roll!=arr[arr.length-1]){
        arr.push(roll);
        roll=Math.floor(Math.random()*20+1);
    }
    arr.push(roll);
    for(var i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i];
        }
        sum=sum+arr[i];
    }
    var avg=sum/arr.length;
    console.log(avg);
    console.log(min);
    console.log(max);
    console.log(arr.length);
}
dice();