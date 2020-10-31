var item = document.getElementById('header');

class User {

  name: string;
  age: number;

  constructor(name: string, age: number)
  {
    this.name = name;
    this.age = age;
  }
}

var user: User = new User('Ruslan', 25);

item.innerHTML = "<h3>" + user.name + ' is ' + user.age + ' old</h3>';
