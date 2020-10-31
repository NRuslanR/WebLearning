var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            this._age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.toString = function () {
        return "{ id: " + this.id + ", name: " + this.name + ", age: " + this.age + " }";
    };
    return User;
}());
var user = new User(1, 'Ruslan', 26);
console.log(user.toString());
user.name = 'Dmitry';
user.age = 37;
console.log(user.toString());
