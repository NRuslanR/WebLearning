namespace Physics
{
  export class Object
  {
    constructor (public mass: number)
    {

    }
  }

  export function calculateForce(mass: number, acceleration: number)
  {
    return mass * acceleration;
  }
}
