var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    console.log('sealed constructor');
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function logginAspect(constructor) {
    var newCtor = function (name) {
        console.log('user instance creating');
        this.name = name;
        this.age = 25;
        this.print = function () {
            console.log("name: " + this.name + ", age: " + this.age);
        };
    };
    return newCtor;
}
//@logginAspect
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(name);
    };
    User = __decorate([
        sealed
    ], User);
    return User;
}());
var user1 = new User('Ruslan'), user2 = new User('Nikolay');
user1.print();
user2.print();
