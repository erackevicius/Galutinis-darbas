
"use strict";

var burger = document.getElementById("burger");
var links = document.getElementsByClassName("link");


burger.addEventListener("click", function(){
  for (var x of links){
    x.classList.toggle("block");
  }
  this.classList.toggle("rotateZ");
});
