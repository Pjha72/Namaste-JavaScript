function x(){

    var i = 1;
    setTimeout(function(){
        console.log(i);
    },1000);
    console.log("hellow world");
}
x();

// Print 1 to 5 in every second
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*2000);
    }
}
x();

// Second method By using var
function x(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i)
            }, i*1000);
        }
        close(i);
    }
    console.log("hellow world");
}
x();