/*global ODSA */
"use strict";
// Written by Mohammed Farghally and Cliff Shaffer
// Bubble Sort Analysis
$(document).ready(function () {
  var av_name = "BubbleSortAnalysisCON";
  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig({"av_name": av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);
  var pseudo = av.code(code).hide();
  var arr;
  var arr_values = [];
  
  // Slide 1
  av.umsg("Let's examine Bubble Sort analysis ");
  av.displayInit();
  
  // Slide 2
  pseudo.show();
  av.umsg("The number of comparisons made by the inner for loop on the $i^{th}$ iteration is always $n-i$");
  pseudo.highlight("loop");
  av.step();
  
  // Slide 3
  pseudo.unhighlight("loop");
  av.umsg("Consider the following example of an array with 6 elements");
  for (var i = 0; i < 6; i++) {
    arr_values[i] = parseInt(Math.random() * 20, 10);
  }
  arr = av.ds.array(arr_values, {"left": 10, "top": 120, "indexed": true});
  av.step();
  
  // Slide 4
  av.umsg("At $i=0$ we have 5 comparisons");
  arr.css([0, 1], {"background-color": "#00FA9A"});
  if (arr.value(0) > arr.value(1)) {
    arr.swap(0, 1);
  }
  av.g.rect(400, 150, 50, 20);
  av.label("i=0",  {"top": "172px", "left": "410px"});
  av.step();
  
  // Slide 5
  av.clearumsg();
  arr.css([1, 2], {"background-color": "#00FA9A"});
  arr.css(0, {"background-color": "white"});
  if (arr.value(1) > arr.value(2)) {
    arr.swap(1, 2);
  }
  av.g.rect(400, 130, 50, 20);
  av.step();
  
  // Slide 6
  arr.css([2, 3], {"background-color": "#00FA9A"});
  arr.css(1, {"background-color": "white"});
  if (arr.value(2) > arr.value(3)) {
    arr.swap(2, 3);
  }
  av.g.rect(400, 110, 50, 20);
  av.step();
  
  // Slide 7
  arr.css([3, 4], {"background-color": "#00FA9A"});
  arr.css(2, {"background-color": "white"});
  if (arr.value(3) > arr.value(4)) {
    arr.swap(3, 4);
  }
  av.g.rect(400, 90, 50, 20);
  av.step();
  
  // Slide 8
  arr.css([4, 5], {"background-color": "#00FA9A"});
  arr.css(3, {"background-color": "white"});
  if (arr.value(4) > arr.value(5)) {
    arr.swap(4, 5);
  }
  av.g.rect(400, 70, 50, 20);
  arr.css(5, {"background-color": "grey"});
  arr.css(4, {"background-color": "white"});
  av.step();

  // Slide 9  
  av.umsg("At $i=1$ we have 4 comparisons");
  arr.css([0, 1], {"background-color": "#00FA9A"});
  if (arr.value(0) > arr.value(1)) {
    arr.swap(0, 1);
  }
  av.g.rect(450, 150, 50, 20);
  av.label("i=1",  {"top": "172px", "left": "460px"});
  av.step();
  
  // Slide 10
  av.clearumsg();
  arr.css([1, 2], {"background-color": "#00FA9A"});
  arr.css(0, {"background-color": "white"});
  if (arr.value(1) > arr.value(2)) {
    arr.swap(1, 2);
  }
  av.g.rect(450, 130, 50, 20);
  av.step();
  
  // Slide 11
  arr.css([2, 3], {"background-color": "#00FA9A"});
  arr.css(1, {"background-color": "white"});
  if (arr.value(2) > arr.value(3)) {
    arr.swap(2, 3);
  }
  av.g.rect(450, 110, 50, 20);
  av.step();
  
  // Slide 12
  arr.css([3, 4], {"background-color": "#00FA9A"});
  arr.css(2, {"background-color": "white"});
  if (arr.value(3) > arr.value(4)) {
    arr.swap(3, 4);
  }
  av.g.rect(450, 90, 50, 20);
  arr.css(4, {"background-color": "grey"});
  arr.css(3, {"background-color": "white"});
  av.step();

  // Slide 13  
  av.umsg("At $i=2$ we have 3 comparisons");
  arr.css([0, 1], {"background-color": "#00FA9A"});
  if (arr.value(0) > arr.value(1)) {
    arr.swap(0, 1);
  }
  av.g.rect(500, 150, 50, 20);
  av.label("i=2",  {"top": "172px", "left": "510px"});
  av.step();
  
  // Slide 14
  av.clearumsg();
  arr.css([1, 2], {"background-color": "#00FA9A"});
  arr.css(0, {"background-color": "white"});
  if (arr.value(1) > arr.value(2)) {
    arr.swap(1, 2);
  }
  av.g.rect(500, 130, 50, 20);
  av.step();
  
  // Slide 15
  arr.css([2, 3], {"background-color": "#00FA9A"});
  arr.css(1, {"background-color": "white"});
  if (arr.value(2) > arr.value(3)) {
    arr.swap(2, 3);
  }
  av.g.rect(500, 110, 50, 20);
  av.step();
  
  // Slide 16
  arr.css(3, {"background-color": "grey"});
  arr.css(2, {"background-color": "white"});
  av.step();

  // Slide 17  
  av.umsg("At $i=3$ we have 2 comparisons");
  arr.css([0, 1], {"background-color": "#00FA9A"});
  if (arr.value(0) > arr.value(1)) {
    arr.swap(0, 1);
  }
  av.g.rect(550, 150, 50, 20);
  av.label("i=3",  {"top": "172px", "left": "560px"});
  av.step();
  
  // Slide 18
  av.clearumsg();
  arr.css([1, 2], {"background-color": "#00FA9A"});
  arr.css(0, {"background-color": "white"});
  if (arr.value(1) > arr.value(2)) {
    arr.swap(1, 2);
  }
  av.g.rect(550, 130, 50, 20);
  av.step();
  
  // Slide 19
  arr.css(2, {"background-color": "grey"});
  arr.css(1, {"background-color": "white"});
  av.step();

  // Slide 20  
  av.umsg("At $i=4$ we have only 1 comparison");
  arr.css([0, 1], {"background-color": "#00FA9A"});
  if (arr.value(0) > arr.value(1)) {
    arr.swap(0, 1);
  }
  av.g.rect(600, 150, 50, 20);
  av.label("i=4", {"top": "172px", "left": "610px"});
  arr.css(1, {"background-color": "grey"});
  arr.css(0, {"background-color": "grey"});
  av.step();
  
  // Slide 21
  av.clearumsg();
  av.umsg("The total amount of comparisons will be the surface area of this shape");
  av.label("|------------ $n-1$ --------------|",  {"top": "190px", "left": "420px"}).css({'font-size': '16px', "text-align": "center"});
  av.label("|--- $n-1$ ---|",  {"top": "90px", "left": "330px"}).css({'font-size': '16px', "text-align": "center"}).addClass("rotated");
  av.g.line(400, 70, 650, 170);
  av.step();
  
  // Slide 22
  av.umsg("The total area will be the sum of the areas of the big traingle and the series of (n-1) small traingles");
  av.step();
  
  // Slide 23
  av.umsg("So, the total area is $\\frac{(n-1)(n-1)}{2} + \\frac{(n-1)}{2}$ which gives $\\frac{n(n-1)}{2}$");
  av.step();
  
  // Slide 24
  av.umsg('And therefore, the worst case running time of Bubble sort is $\\theta(n^2)$');
  av.recorded();
});
