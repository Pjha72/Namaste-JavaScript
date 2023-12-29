function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
    // return y;
}
x();


function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
    // return y;
}
var z = x();
console.log(z);
z(); // 7


function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
x();

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();
