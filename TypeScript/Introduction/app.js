var item = document.getElementById('header');
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User('Ruslan', 25);
item.innerHTML = "<h3>" + user.name + ' is ' + user.age + ' old</h3>';
