function sealed(constructor: Function)
{
  console.log('sealed constructor');
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function logginAspect<TFunction extends Function>(constructor: TFunction): TFunction
{
  let newCtor: Function = function (name: string)
  {
    console.log('user instance creating');
    this.name = name;
    this.age = 25;
    this.print = function (): void
    {
      console.log(`name: ${ this.name }, age: ${ this.age }`);
    }
  }

  return <TFunction>newCtor;
}

//@logginAspect
@sealed
class User
{
  public name: string;

  constructor(name: string)
  {
    this.name = name;
  }

  print(): void
  {
    console.log(name);
  }
}

let user1 = new User('Ruslan'), user2 = new User('Nikolay');

user1.print();
user2.print();
