const $ = require('jquery');

$(document).ready(function(){
 $("#message").html("This is Hello World by JQuery");
});

import {sayHello} from './say-hello.js';
console.log(sayHello("Steve"));