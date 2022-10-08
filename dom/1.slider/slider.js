const leftbtn = document.querySelector('#left');
const rightbtn = document.querySelector('#right');
const items = document.querySelector('#items');
let currentright = 0;
let currentleft = 0;
rightbtn.addEventListener('click', e=>{
  e.preventDefault();
  if (currentright <500){
    currentright += 100;
  items.style.right = `${currentright}px`;
  }
})
leftbtn.addEventListener ('click', e=>{
e.preventDefault();
if (currentright > 0){
  currentright -= 100;
  items.style.right = `${currentright}px`;
}
})