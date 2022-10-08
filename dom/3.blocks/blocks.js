const quantityselector = document.querySelector(".quantity-selector");
const colorselector = document.querySelector(".color-selector");
const blockscontainer = document.querySelector(".blocks");

const createmarkup = quantity =>{
 
  let markup = '';

for (let i = 0; i < quantity; i++){
  const block = document.createElement('div');
  block.className = 'item';
  block.innerText = i + 1;

  markup += block.outerHTML;
}
return markup;
  }
  quantityselector.addEventListener('change', e=>{
    const quantity = e.target.value;
    const markup = createmarkup(quantity);
blockscontainer.innerHTML = markup;
});

const colortheblock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;

colorselector.addEventListener('change', e=>{
  const color = e.target.value;
  const items = blockscontainer.querySelectorAll('.item');

  changed = !changed;

  for (let i = 0; i < items.length; i++){
    const currentblock = items[i];
    const blocknumber = i + 1;

    if (changed) {
      if (blocknumber % 2 != 0) {
        colortheblock(currentblock,color)
      } else {
        colortheblock(currentblock, '#fff');
      }
    } else {
      if (blocknumber % 2 == 0) {
        colortheblock(currentblock, color);
      } else {
        colortheblock(currentblock, '#fff');
    }
  }
  }
})