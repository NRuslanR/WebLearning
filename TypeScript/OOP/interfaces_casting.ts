interface IMix
{
  id: number;
  activate(): void;
}

interface IMixture extends IMix
{
  [MixId: number]: IMix;
}

let mix1: IMix = {

  id: 1,
  activate()
  {
    console.log(`${this.id} activated`);
  }
}

class SimpleMix implements IMix
{
  id: number;
  activate()
  {
    console.log(`{SimpleMix ${this.id} activated}`);
  }
}

class SimpleMixture implements IMixture
{
  id: number;
  activate(): void
  {
    console.log(`SimpleMixutre ${this.id} pre-activated`);

    for(let i: number = 1; i <= 5; ++i)
    {
      if (typeof this[i] !== 'undefined' && 'activate' in this[i] /*instanceof IMix*/)
        (<IMix>this[i] /*this[i] as IMix*/).activate();
    }

    console.log(`SimpleMixutre ${this.id} post-activated`);
  }
  [MixId: number]: IMix;
}

let sm1 = new SimpleMixture();

sm1.id = 1;
sm1[mix1.id] = mix1;
sm1[2] = new SimpleMix();
sm1[2].id = 2;

let sm2 = new SimpleMixture();

sm2.id = 3;

sm2[4] = new SimpleMix();
sm2[4].id = 4;

sm2[5] = new SimpleMix();
sm2[5].id = 5;

sm1[sm2.id] = sm2;

sm1.activate();
