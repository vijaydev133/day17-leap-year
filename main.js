function checkYear(x){
    let checker = false;
    if((x % 4 == 0) && (x % 100 != 0) || (x % 400 == 0) ){
        checker = true
    }
    return checker;
}

if(checkYear(1631)){
    console.log("leap year");
}
else{
    console.log("Not a leap year");
}
