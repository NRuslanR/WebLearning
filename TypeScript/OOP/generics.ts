function reduceArray<T>(args: Array<T>): string
{
  let result = '';

  for (let i = 0; i < args.length; ++i)
  {
    if (result == '')
      result = args[i].toString();

    else result += ', ' + args[i].toString();
  }

  return result;
}

console.log(`reduce(3, 4, 19, 20) = ${ reduceArray([3, 4, 19, 20]) }`);

interface IContainer<TItem>
{
  [itemName: string]: TItem;
}

class Entity<TId>
{
  id: TId;

  constructor (id: TId)
  {
    this.id = id;
  }

  printInfo(): void
  {
    console.log(`Entity ${ this.id }`);

  }
}

let x: IContainer<Entity<string>> = {};

x['first'] = new Entity<string>('1-xx');
x['second'] = new Entity<string>('2-xx');

x['first'].printInfo();
x['second'].printInfo();

let z = new Entity<number>(3);

class NumberEntity extends Entity<number>
{

}

class EntityInfo<TEntityId, TEntity extends Entity<TEntityId>>
{

}

let info = new EntityInfo<number, NumberEntity>();

function entityFactory<T>(type: { new(): T; }): T {

  return new type();

}
