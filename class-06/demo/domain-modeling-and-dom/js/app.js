

let frankie = {
  name: 'Frankie',
  age: 1,
  interests: ['cuddling','chasing string','catnip'],
};

let jumper = {
  name: 'Jumper',
  age: 2,
  interests: ['jumping','bounding','leaping'],
};

let serena = {
  name: 'Serena',
  age: 6,
  interests: ['domination','grudging pets','being aloof'],
};

let kittenContainerElem = document.getElementById('kittenProfiles');

function displayKitten(kittenObj) {

  let articleElem = document.createElement('article');

  kittenContainerElem.appendChild(articleElem);

  let nameHeaderElem = document.createElement('h2');

  nameHeaderElem.textContent = kittenObj.name;

  articleElem.appendChild(nameHeaderElem);

  // p tag with bio
  let bioElem = document.createElement('p');
  bioElem.textContent = kittenObj.name + ' is adorable and they are ' + kittenObj.age + ' years old';
  articleElem.appendChild(bioElem);

  // interests
  let interestsElem = document.createElement('ul');
  articleElem.appendChild(interestsElem);

  for(let i=0; i < kittenObj.interests.length; i++) {
    let interestText = kittenObj.interests[i];
    let li = document.createElement('li');
    li.textContent = interestText;
    interestsElem.appendChild(li);
  }

  // image
  let imgElem = document.createElement('img');
  articleElem.appendChild(imgElem);
  imgElem.setAttribute('src', 'images/' + kittenObj.name.toLowerCase() + '.jpeg');
  imgElem.setAttribute('alt', 'cute picture of ' + kittenObj.name + ', who is an orange and white cat. You should really adopt him.');

}

let kittens = [jumper, frankie, serena];

for(let i=0; i < kittens.length; i++) {
  let kitten = kittens[i];
  displayKitten(kitten);
}



