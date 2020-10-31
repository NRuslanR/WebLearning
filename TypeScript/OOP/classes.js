var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
        ++User.counter;
    }
    User.prototype.toString = function () {
        return "{ \"id\": \"" + this.id + "\", \"name\": \"" + this.name + "\" }";
    };
    User.getInstanceCount = function () {
        return User.counter;
    };
    User.counter = 0;
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, personnel_number) {
        var _this = _super.call(this, id, name) || this;
        _this.personnel_number = personnel_number;
        return _this;
    }
    Employee.prototype.toString = function () {
        return "{ \"user\": " + _super.prototype.toString.call(this) + ", \"personnel_number\": \"" + this.personnel_number + "\" }";
    };
    return Employee;
}(User));
var user = new User(1, "Ruslan Nigmatullin");
console.log(user.toString());
for (var i = 0; i < 10; ++i, new User(1, ''))
    ;
var emp = new Employee(2, "Dmitry", "53443");
console.log("emp: " + emp.toString());
emp.personnel_number = "new number";
console.log("new emp: " + emp.toString());
console.log("user instance count: " + User.getInstanceCount());
