var a = "string";
var b = 5;
var c = ["Ruslan", 25, 8];
var d = [1, 4, 23.43, "sfdsdfs"];
d[0] = "str";
var w = [1, 2, 3];
var e = undefined;
var f = null;
var j = true;
var obj = { name: "Ruslan", age: 25 };
var Sequence;
(function (Sequence) {
    Sequence[Sequence["First"] = 0] = "First";
    Sequence[Sequence["Second"] = 1] = "Second";
})(Sequence || (Sequence = {}));
;
var z = Sequence.Second;
var r;
var y;
var v = "string";
if (typeof v === 'string') {
    console.log("v is string, value = " + v + ", length: " + v.length);
}
v = 120;
if (typeof v === 'number')
    console.log('v is number, value = ' + v + ', divide by 3 = ' + v / 3);
