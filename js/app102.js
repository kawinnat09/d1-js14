/*var a = "Global";
function scopeTest(){
    var myLocal = "Local";
    document.write(myLocal);
    console.log(myLocal);
}

console.log(a);
scopeTest();*/

var x = 1;

{
    let x = 2; //local
}

console.log(x);