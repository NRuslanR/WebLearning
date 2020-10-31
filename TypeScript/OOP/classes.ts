class User
{
  protected id: number;
  protected name: string;
  private static counter: number = 0;

  constructor (id: number, name: string)
  {
    this.id = id;
    this.name = name;

    ++User.counter;
  }

  public toString(): string
  {
    return `{ "id": "${ this.id }", "name": "${ this.name }" }`;
  }

  public static getInstanceCount(): number
  {
    return User.counter;
  }
}

class Employee extends User
{
  constructor (id: number, name: string, public personnel_number: string)
  {
    super(id, name);
  }

  public toString(): string
  {
    return `{ "user": ${ super.toString() }, "personnel_number": "${ this.personnel_number }" }`;
  }
}

let user: User = new User(1, "Ruslan Nigmatullin");

console.log(user.toString());

for (let i = 0; i < 10; ++i, new User(1, ''));

let emp = new Employee(2, "Dmitry", "53443");

console.log(`emp: ${ emp.toString() }`);

emp.personnel_number = "new number";

console.log(`new emp: ${ emp.toString() }`);

console.log(`user instance count: ${ User.getInstanceCount() }`);
