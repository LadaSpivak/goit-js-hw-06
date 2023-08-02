const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const incrementBtn = counter.querySelector('button[data-action="increment"]');


let counterValue = 0;


function increment() {
  counterValue++;
  updateValue();
}


function decrement() {
  counterValue--;
  updateValue();
}


function updateValue() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

updateValue();