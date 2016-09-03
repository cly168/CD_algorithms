function removeNegatives(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            for(var k = i; k<arr.length; k++){
                arr[k]=arr[k+1];
            }
            arr.length--
            i-- 
        }
    }
    return arr;
}
function removeNegatives2(arr){
    var neg=0;
    for(var i=0; i + neg<arr.length; i++){
        if(arr[i+neg]<0){
            neg++
            i--
        }
        else{
            arr[i]=arr[i+neg];
        }   
    }
    arr.length=arr.length-(1*neg)
    return arr;
}