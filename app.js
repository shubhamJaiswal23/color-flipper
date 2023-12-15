const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//Write JavaScript Code below this line

//Variables
const span = document.querySelector('span.color');
const btn = document.querySelector('button#btn');
let index = 0;

//Event Listeners
window.addEventListener('load', () => {
  document.body.style.backgroundColor = colors[3];
  span.textContent = colors[3];
});

//Event Listener Callback function
const handleClick = () => {
  document.body.style.backgroundColor = colors[index];
  span.textContent = colors[index];
  index++;
  if (index > 3) {
    index = 0;
    return index;
  }
};

btn.addEventListener('click', handleClick);
