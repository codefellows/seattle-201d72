
let ctr = 0;

let amount = 12;

while(ctr <= amount) {

  console.log('get 1 egg');

  ctr = ctr + 1;
  
}

ctr = 0;

do {
  console.log("doing the thing");
  ctr += 1;
} while(ctr < 10);

console.log("let's play hide and seek");

for(let i = 10; i <= 100;i += 10) {
  console.log(i, "Mississippi");
}

// clunky as separate variables
let apple = 'apple';
let banana = 'banana';
let cherry = 'cherry';

// a list of things
let fruitList = ['apple','banana','cherry','dates','fig','grapefruit','hibiscus'];

console.log('fruit list', fruitList);

console.log(fruitList[0]);
console.log(fruitList[1]);
console.log(fruitList[2]);

for(let i = 0; i < fruitList.length; i++){
  console.log(fruitList[i]);
}

// Falsy Things
// NaN
// Empty string [Any non empty string is Truthy]
// false
// 0, -0
// 0.0
// null
// undefined

let value;

if(value) {
  console.log(value, 'So Truthy!!!!');
} else {
  console.log(value, 'Falsy :(')
}

let name = 'Jakob';

if (name) {
  console.log('name', name);
}

if('' || 0) {
  console.log('whole expression is truthy');
}

console.log(false || 4);