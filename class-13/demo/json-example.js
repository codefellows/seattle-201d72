'use strict';

// JSON - JavaScript Object Notation
// to clear local storage: localStorage.clear()

// JSON
// {
//   "name":"truste.eu.cookie.notice_preferences",
//   "value":"2:","path":"/",
//   "expires":164413398923,
//   "isJSON": true
// }

// JavaScript
// {
//   name: "truste.eu.cookie.notice_preferences"
// }

let allCats = []

function Cat(name, url, age, temperment) {
  this.catName = name;
  this.catUrl = url;
  this.age = age;
  this.temperment = temperment;
  this.hasWhiskers = true;
  // this.sayHi = function(){console.log(`${this.catName} says meow` )}
  // this.allCats = []
  allCats.push(this);
}

Cat.prototype.sayHi = function(){
  console.log(`${this.catName} says meow`); 
}

new Cat('sockka', 'http://cats.com', 13, "sweet but alwasys awake");
new Cat('evie', 'http://cats.com', 9, 'scared');
new Cat('tangerine', 'http://cats.com', 9, 'sweet');
new Cat('cagliostro', 'http://cats.com', 200, 'vampire');

for(let i=0; i<allCats.length; i++){
  allCats[i].sayHi();
}

console.log({allCats});

// STEP 1: convert our allCats array into JSON
const JSONCats = JSON.stringify(allCats);
console.log({JSONCats});
// [{"catName":"sockka","catUrl":"http://cats.com","age":13,"temperment":"sweet but alwasys awake","has

// STEP 2: put our JSONCats into local storage
localStorage.setItem('cats', JSONCats);
// localStorage.clear();

// STEP 3: get our cats out of local storage
const localStorageCats = localStorage.getItem('cats');
console.log({localStorageCats});

// STEP 4: turn our cats back into javascript
const javaScriptCats = JSON.parse(localStorageCats);
console.log({javaScriptCats});

// this will give us an error because our cats are no longer associated with the constructor
// for(let i=0; i<javaScriptCats.length; i++){
//   javaScriptCats[i].sayHi();
// }

// if I want my javaScriptCats to have access to my constructor methods, I would need to run each object back thorugh the constructor function