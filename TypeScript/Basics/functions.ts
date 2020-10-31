function simpleFunc(): void {

}

function abc(a: number, b): number
{
  return a + b;
}

function g(a=5): number
{
  return a;
}

function h(first: number = g(), second?: boolean /*= true*/)
{
  return second;
}

//console.log(abc(4));

console.log(abc(3, 5));
console.log(abc(5, "abc"));

console.log(g());
console.log(g(443));

console.log(h(9, true));
console.log(h(4, false));

function sum(first: number, ...rest: number[]): number
{
  for (let item of rest)
    first += item;

  return first;
}

console.log(`sum(2, 9, 20) = ${sum(2, 9, 20)}`);

type NumberOp = (a: number, b: number) => number;

function MathOp(x: number, y: number, op: NumberOp): number
{
  return op(x, y);
}

function add(a: number, b: number)
{
  return a + b;
}

console.log('4 + 9 = ' + MathOp(4, 9, add));
console.log(`9 - 14 = ${ MathOp(9, 14, (x, y) => x - y }`);
