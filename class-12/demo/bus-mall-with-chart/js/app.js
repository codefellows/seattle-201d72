/* Globals */
const productNames = ['boots', 'dog-duck', 'tauntaun', 'breakfast', 'bathroom', 'bubblegum', 'chair', 'pet-sweep', 'scissors', 'water-can', 'wine-glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'usb'];

// DANGER: DEBUG
// const productNames = ['boots', 'dog-duck', 'tauntaun', 'breakfast', 'bathroom', 'bubblegum'];

const maxRounds = 5;
let roundCtr = 1;

const leftImgElem = document.getElementById('img-left');
const centerImgElem = document.getElementById('img-center');
const rightImgElem = document.getElementById('img-right');
const imagesContainerElem = document.getElementById('images');

let productLeft = null;
let productCenter = null;
let productRight = null;

/* Constructor */
function Product(title, url) {
  this.title = title;
  this.url = url;
  this.tally = 0;
  this.views = 0;

  // optionally, do this...
  Product.all.push(this);
}

Product.all = [];

/* Functions */
function createProducts() {
  for (let index = 0; index < productNames.length; index++) {
    const productName = productNames[index];
    new Product(productName, './imgs/' + productName + '.jpg');
  }
}

function pickNewProducts() {

  shuffle(Product.all);

  const safeProducts = [];

  for (let index = 0; index < Product.all.length; index++) {

    const product = Product.all[index];

    if (product !== productLeft && product !== productCenter && product !== productRight) {

      safeProducts.push(product);

      if (safeProducts.length === 3) {
        break;
      }
    }
  }


  productLeft = safeProducts[0];
  productCenter = safeProducts[1];
  productRight = safeProducts[2];

  console.log(productLeft.title);

}

function renderProducts() {

  leftImgElem.src = productLeft.url;
  leftImgElem.alt = productLeft.title;

  centerImgElem.src = productCenter.url;
  centerImgElem.alt = productCenter.title;

  rightImgElem.src = productRight.url;
  rightImgElem.alt = productRight.title;
}

/* fisher yates style shuffle
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function productClickHandler(event) {

  const productId = event.target.id;

  switch (productId) {

    case leftImgElem.id:
      productLeft.tally += 1;
      pickNewProducts();
      renderProducts();
      roundCtr += 1;
      break;

    case centerImgElem.id:
      productCenter.tally += 1;
      pickNewProducts();
      renderProducts();
      roundCtr += 1;
      break;

    case rightImgElem.id:
      productRight.tally += 1;
      pickNewProducts();
      renderProducts();
      roundCtr += 1;
      break;

    default:
      alert('mind the gap!');
  }

  if (roundCtr === maxRounds) {
    imagesContainerElem.removeEventListener('click', productClickHandler);
  }

}


function renderChart() {

  const ctx = document.getElementById('canvas').getContext('2d');
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
      labels: productNames,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',

        // TODO: get the "good" product data in here
        data: [0, 10, 5, 2, 20, 30, 45,0, 10, 5, 2, 20, 30, 45,0, 10, 5, 2, 20, 30]
      }]
    },

    // Configuration options go here
    options: {}
  });
}

imagesContainerElem.addEventListener('click', productClickHandler);

createProducts();

pickNewProducts();

renderProducts();

// call when done
// renderChart();
