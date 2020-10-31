abstract class Switcher
{
  abstract switch(): void;
}

class SwitcherDecorator extends Switcher
{
  originalSwitcher: Switcher;

  constructor (originalSwitcher: Switcher)
  {
    super();
    this.originalSwitcher = originalSwitcher;
  }

  switch(): void
  {
    this.originalSwitcher.switch();
  }
}

class ConsoleSwitcher extends Switcher
{
  constructor()
  {
    super();
  }

  switch(): void
  {
    console.log('ConsoleSwitcher.switch');

  }
}

class FileSwitcher extends Switcher
{
  switch(): void
  {
    console.log('FileSwitcher.switch');

  }
}

class TransactionalSwitcher extends SwitcherDecorator
{
  switch(): void
  {
    console.log('TransactionalSwitcher.start');
    super.switch();
    console.log('TransactionalSwitcher.commit');
  }
}

class LoggingSwitcher extends SwitcherDecorator
{
  switch(): void
  {
    console.log('LoggingSwitcher.start');
    super.switch();
    console.log('LoggingSwitcher.end');
  }
}

let switchers: Switcher[] = [

  new ConsoleSwitcher(),
  new FileSwitcher(),
  new LoggingSwitcher(
    new TransactionalSwitcher(
      new FileSwitcher()
    )
  )
];

for (let switcher of switchers)
  switcher.switch();
