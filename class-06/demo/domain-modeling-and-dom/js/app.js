let kittenContainerElem = document.getElementById('kittenProfiles');

let articleElem = document.createElement('article');

kittenContainerElem.appendChild(articleElem);

let nameHeaderElem = document.createElement('h2');

nameHeaderElem.textContent = 'Frankie';

articleElem.appendChild(nameHeaderElem);

/*

<article>
  <h2>.....</h2>
</article>

console.log(kittenContainerElem);
*/



