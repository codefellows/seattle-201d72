'use strict';

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

function Kitten(name, listOfLikes, goodWithKids, goodWithDogs, goodWithOtherCats) {
  this.name = name;
  this.likes = listOfLikes;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;

  this.age = this.randomAge(1,12);
}

Kitten.prototype.meow = function() {
  console.log('meow. I am', this.name);
}

Kitten.prototype.randomAge = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Kitten.prototype.render = function() {

  const article = document.createElement('article');

  const profileContainer = document.getElementById('kittenProfiles');

  profileContainer.appendChild(article);


  // notice the repetition
  const nameElem = document.createElement('h2');

  article.appendChild(nameElem);

  nameElem.textContent = this.name;


  const bioElem = document.createElement('p');

  article.appendChild(bioElem);

  bioElem.textContent = 'The bio of ' + this.name;

  // render the table
  const tableElem = document.createElement('table');
  profileContainer.appendChild(tableElem);

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  tableElem.appendChild(row1);
  tableElem.appendChild(row2);

  const goodWithKidsHeaderElem = document.createElement('th');
  row1.appendChild(goodWithKidsHeaderElem);
  goodWithKidsHeaderElem.textContent = 'Good with Kids';

  const goodWithDogsHeaderElem = document.createElement('th');
  row1.appendChild(goodWithDogsHeaderElem);
  goodWithDogsHeaderElem.textContent = 'Good with Dogs';

  const goodWithCatsHeaderElem = document.createElement('th');
  row1.appendChild(goodWithCatsHeaderElem);
  goodWithCatsHeaderElem.textContent = 'Good with Other Cats';


  const goodWithKidsDataElem = document.createElement('td');
  row2.appendChild(goodWithKidsDataElem);
  goodWithKidsDataElem.textContent = this.goodWithKids;


  const goodWithDogsDataElem = document.createElement('td');
  row2.appendChild(goodWithDogsDataElem);
  goodWithDogsDataElem.textContent = this.goodWithDogs;


  const goodWithCatsDataElem = document.createElement('td');
  row2.appendChild(goodWithCatsDataElem);
  goodWithCatsDataElem.textContent = this.goodWithOtherCats;
}

function standaloneScreechFunction() {
  console.log('reeerereerere', this.name);
}

Kitten.prototype.screech = standaloneScreechFunction;

let luna = new Kitten('Luna',['food','mice','sleeping'],true, false, false);
let ernesto = new Kitten('Ernesto',['catnip','kids','dogs'],true, true, false);

const kittens = [luna, ernesto];

for (let index = 0; index < kittens.length; index++) {
  const kitten = kittens[index];
  kitten.render();
}






