function buttonWasClicked() {
  console.log("I was clicked!!!!!")
}

function buttonWasDoubleClicked() {
  console.log("I was douuble clicked!!!!!")
}

const button = document.getElementById('click-me');

button.addEventListener('click', buttonWasClicked);

button.addEventListener('dblclick', buttonWasDoubleClicked);

function submitHandler(event) {
  event.preventDefault();

  console.log(event.target.storeName.value);
  console.log(event.target.minCustomers.value);
  console.log(event.target.maxCustomers.value);
  console.log(event.target.avgCookies.value);

  // Gotcha Alert!!!
  console.log(parseInt(event.target.minCustomers.value) + parseInt(event.target.maxCustomers.value));

  /*
  name
  minCustomersPerHour
  maxCustomersPerHour
  avgCookiesPerSale
  */
}

const form = document.getElementById('new-store-form');

form.addEventListener('submit', submitHandler);



