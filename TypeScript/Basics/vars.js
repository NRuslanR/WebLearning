function f() {
    if (1) {
        var x = 5;
    }
    console.log('var x = ' + x);
}
function g() {
    if (1) {
        var x = 5;
    }
}
function h() {
    console.log('var x = ' + x);
    var x = 5;
}
function k() {
    var x = 5;
}
function i() {
    var x = 5;
    console.log('var x = ' + x);
    var x = 10;
    console.log('var x = ' + x);
}
function w() {
    var x = 5;
    console.log('var x = ' + x);
    console.log('var x = ' + x);
}
f();
g();
h();
k();
i();
w();
