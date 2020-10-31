/// <reference path="physics.ts" />

import object1 = Physics.Object;

let obj = new object1(200);

let force = Physics.calculateForce(obj.mass, 30);

console.log('force: ' + force);
