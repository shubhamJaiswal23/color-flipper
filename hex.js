const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//Variables
const span = document.querySelector('span.color');
const btn = document.querySelector('button#btn');

//turn repeating code into a function
const hexCode = () => {
  const r1 = Math.floor(Math.random() * 16);
  const r2 = Math.floor(Math.random() * 16);
  const r3 = Math.floor(Math.random() * 16);
  const r4 = Math.floor(Math.random() * 16);
  const r5 = Math.floor(Math.random() * 16);
  const r6 = Math.floor(Math.random() * 16);
  const hexCode = `#${hex[r1]}${hex[r2]}${hex[r3]}${hex[r4]}${hex[r5]}${hex[r6]}`;

  return hexCode;
};

//EventListeners
window.addEventListener('load', () => {
  document.body.style.backgroundColor = hexCode();
  span.textContent = hexCode();
});

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = hexCode();
  span.textContent = hexCode();
});
