const lines_moving_black = document.querySelectorAll('div.black');
const lines_moving_red = document.querySelectorAll('div.red');
const product_container = document.querySelector('div.product-container');
// const red_container = document.querySelector('div.red-container');
const products = { red: { name: 'red' }, black: { name: 'black' } };
window.addEventListener('click', (e) => {
  console.log(products.red.name);
  product_container.classList.remove('hidden-product');

  if (e.target.classList[0] === 'red') {
    product_container.children[0].innerHTML = products.red.name;
  }
  if (e.target.classList[0] === 'black') {
    // product_container.style.opacity = 1;
    product_container.children[0].innerHTML = products.black.name;
  }
  for (let i = 0; i < lines_moving_black.length; i++) {
    lines_moving_black[i].classList.add('hidden');
    lines_moving_red[i].classList.add('hidden');
  }
});
