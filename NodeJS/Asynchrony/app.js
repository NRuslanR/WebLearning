function display(data, onCall) {

  var randomNumber = Math.round(Math.random() * 10);

  var error = (randomNumber > 5) ? `Random Number (${randomNumber}) Error` : null;

  setTimeout(
    function () {

      onCall(error, data);

    },
    Math.round(Math.random() * 1000)
  );

}

console.log("Program started");

var handler =
  function (error, data) {

    if (error) console.log(`Error: ${error}`);

    else console.log(data);

  };

display("Data1 are being handled...", handler);
display("Data2 are being handled...", handler);

console.log("Program finished");
