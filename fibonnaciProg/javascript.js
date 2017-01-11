var first = 0;
var second = 1;
var list = new Array();
list = [0,1];
var third;

function fibonacci(first,second,last) {
    if(last == 0) {
        document.write("0");
    }
    else if(last == 1) {
        document.write("0 1");
    }
    else {
        third = first + second;
        if(third >= last) {
            document.getElementById("series").innerHTML = list;
        }
        else {
            list.push(third);
            first=second;
            second=third;
            fibonacci(first,second,last);
        }    
    }
}