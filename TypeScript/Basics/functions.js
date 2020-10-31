function simpleFunc() {
}
function abc(a, b) {
    return a + b;
}
function g(a) {
    if (a === void 0) { a = 5; }
    return a;
}
function h(first, second) {
    if (first === void 0) { first = g(); }
    return second;
}
console.log(abc(3, 5));
console.log(abc(5, "abc"));
console.log(g());
console.log(g(443));
console.log(h(9, true));
console.log(h(4, false));
function sum(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var item = rest_1[_a];
        first += item;
    }
    return first;
}
console.log("sum(2, 9, 20) = " + sum(2, 9, 20));
function MathOp(x, y, op) {
    return op(x, y);
}
function add(a, b) {
    return a + b;
}
console.log('4 + 9 = ' + MathOp(4, 9, add));
console.log("9 - 14 = " + MathOp(9, 14, function (x, y) { return x - y; }));
