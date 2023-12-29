function a(){
    console.log(b); // 10
    c();
    function c(){
        console.log(b); // 10
    }
}
var b = 10;
a();