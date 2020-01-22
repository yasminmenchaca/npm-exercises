const $ = require('jquery');

const sayHello = (name) => {
  return 'Hello ' + name;
};

console.log(sayHello("Yasmin"));

$(document).ready(function(){
 $("#message").html("This is Hello World by JQuery");
});