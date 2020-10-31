class User
{
  private _name: string;
  private _age: number;

  constructor(readonly id: number, name: string, age: number)
  {
    this.name = name;
    this.age = age;
  }

  public get name(): string
  {
    return this._name;
  }

  public set name(newName: string)
  {
    this._name = newName;
  }

  public get age(): number
  {
    return this._age;
  }

  public set age(newAge: number)
  {
    this._age = newAge;
  }

  public toString()
  {
    return `{ id: ${ this.id }, name: ${ this.name }, age: ${ this.age } }`
  }
}

let user = new User(1, 'Ruslan', 26);

console.log(user.toString());

user.name = 'Dmitry';
user.age = 37;

console.log(user.toString());
