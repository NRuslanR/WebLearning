var Physics;
(function (Physics) {
    var Object = /** @class */ (function () {
        function Object(mass) {
            this.mass = mass;
        }
        return Object;
    }());
    Physics.Object = Object;
    function calculateForce(mass, acceleration) {
        return mass * acceleration;
    }
    Physics.calculateForce = calculateForce;
})(Physics || (Physics = {}));
/// <reference path="physics.ts" />
var object1 = Physics.Object;
var obj = new object1(200);
var force = Physics.calculateForce(obj.mass, 30);
console.log('force: ' + force);
