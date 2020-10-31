let a: string = "string";
let b: number = 5;
let c: [string, number, any] = ["Ruslan", 25, 0b1000];
let d: any[] = [1, 4, 23.43, "sfdsdfs"];

d[0] = "str";
let w: number[] = [1, 2, 3];

//w[0] = 'str';

let e: undefined = undefined;
let f: null = null;
let j: boolean = true;

let obj = { name: "Ruslan", age: 25 };

//obj = { name: "Ruslan" };

enum Sequence { First, Second };

let z: Sequence = Sequence.Second;

let r: void;
let y: never;

type StringOrNumber = string | number;
let v: StringOrNumber = "string";

if (typeof v === 'string')
{
  console.log("v is string, value = " + v + ", length: " + (v as string).length);
}

v = 120;

if (typeof v === 'number')
  console.log('v is number, value = ' + v + ', divide by 3 = ' + (<number>v) / 3);
  
