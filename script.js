//11th method

function firstLast6(arr){

    if (arr[0] == 6) {
        return true;
    }

    if (arr[arr.length - 1] == 6) {
        return true;
    }
    return false;
}
//twelth method

function has23(arr){

    if(arr[0] > 3 && arr[1] > 3) {
        return false;
    }
    if (arr[0] == 2 || 3 ) {
        return true;
    }
    if(arr[1] == 2 || 3){
        return true;
    }

}

//thirteenth method

function fix23(arr){

    for(var i = 0;i  < arr.length ; i++){
        if(arr[i]==2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;

}

// fourteenth method

function countYZ(arr) {
    arr=arr.toLowerCase();
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "z" && (arr[i+1] == " "|| i==arr.length-1)){
            count = count + 1;
        }
        if(arr[i]== "y" && (arr[i+1]== " " || i== arr.length-1)){
            count = count + 1;
        }
    }
    return count;
}


// fifteenth method

function endOther(stringone,stringtwo) {

    stringone = stringone.toLowerCase();
    stringtwo = stringtwo.toLowerCase();


    if (stringtwo.substring(stringtwo.length - stringone.length) == stringone) {
        return true;
    }

    if (stringone.substring(stringone.length - stringtwo.length) == stringtwo) {
        return true;
    }
    return false;
}


// sixteenth method

function starOut(stringone) {

    stringone = stringone.toLowerCase();
    var x = "";
    for (var i = 0; i < stringone.length; i++) {

        if ((stringone[i] != "*" && stringone[i+1]!= "*"&& stringone[i-1]!= "*")) {
            x = x + stringone[i];
        }
    }
    return x;
}


//seventeen method

function getSandwich(arr) {
    var x = arr.indexOf("bread");
    var y = arr.lastIndexOf("bread");
    var meat= "";
    if (x==-1||y==-1){
        return "";
    }
    if(x==y){
        return "";

    }

    return arr.substring(x+5,y);
}

//eighteenth method

function canBalance(arr){
    var sum1=0;
    var sum2=0;
    for(var i = 0 ; i< arr.length;i++){
        sum1=sum1+arr[i];
        for(var j = i+1; j < arr.length;j++){
            sum2=sum2+arr[j];
        }
        if(sum1==sum2){
            return true;
        }
        sum2=0;
    }
    return false;
}


// ninteenth method

function countClumps(arr){

    var count=0;
    for (var i = 0; i <arr.length;i++){

        if(arr[i]==arr[i+1] && arr[i+1] != arr[i+2]){
            count = count+1;

        }
    }
    return count;
}

//twenteenth method

function evenlySpaced(a,b,c){
    if(a-b==b-c){
        return true;
    }
    if(b-a==a-c){
        return true;
    }
    if(c-a==a-b){
        return true;
    }
    if(a-c==c-b){
        return true;
    }
    return false;
}