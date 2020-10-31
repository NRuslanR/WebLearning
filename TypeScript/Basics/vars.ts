function f()
{
  if (1)
  {
    var x = 5;
  }

  console.log('var x = ' + x);
}

function g()
{
  if (1)
  {
    let x = 5;
  }

  //console.log('let x = ' + x);
}

function h()
{
  console.log('var x = ' + x);

  var x = 5;
}

function k()
{
  //console.log('let x = ' + x);

  let x = 5;
}

function i()
{
  var x = 5;

  console.log('var x = ' + x);

  var x = 10;

  console.log('var x = ' + x);
}

function w()
{
  let x = 5;

  console.log('var x = ' + x);

  //let x = 10;

  console.log('var x = ' + x);
}

f();
g();
h();
k();
i();
w();
