
var nameInput = document.querySelector("#name-input");
var greetingOutput = document.querySelector("#greeting-output");

function doTheThing() {
  var name = nameInput.value;

  greetingOutput.innerHTML = "Hello " + name + ", welcome home!";
}
