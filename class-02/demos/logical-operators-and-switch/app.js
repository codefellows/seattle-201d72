'use strict';

// let response = confirm('Are yor ready to rumble?');


// if(response === true) {
//   alert('heck yeah');
// } else {
//   alert('oh well :(');
// }


// if(9 === '9') {
//   alert('pretty true');
// }

// logical operator example
var myBool = true;
var anotherBool = false;
var thirdBool = true;

// And = both conditions have to be true
if (myBool && thirdBool) {
  console.log('myBool and thirdBool were both true');
} // only one of these have to be true
else if (myBool || anotherBool) {
  console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (thirdBool) {
  console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}

console.log('all done');

let color = prompt('What is your favorite color?');

let lowerColor = color.toLowerCase();

switch (lowerColor) {

case 'blue':
  console.log('Like a sky');
  break;

case 'red':
  console.log('like a rose');
  break;

default:
  console.log('I\'ve never heard of', color);
}


