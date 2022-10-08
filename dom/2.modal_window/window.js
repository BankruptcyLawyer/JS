const openbutton = document.querySelector("#openOverlay");
const body = document.body;
openbutton.addEventListener("click", e => {
  const overlayelement = document.createElement('div');
  overlayelement.classList.add('overlay');

  overlayelement.addEventListener('click', e=>{
    if (e.target == overlayelement){
      closeelement.click();
    }
  })

  const containerelement = document.createElement('div');
  containerelement.classList.add('modal-container');

  const contentelement = document.createElement('div');
  contentelement.classList.add('content');

  contentelement.innerHTML = 'Hello, World!';

  const closeelement = document.createElement('a');
  closeelement.classList.add('close');
  closeelement.textContent = 'x';
  closeelement.href = '#';
  
  closeelement.addEventListener('click', e=>{
    e.preventDefault();
    body.removeChild(overlayelement);
  })

  overlayelement.appendChild(containerelement);
  containerelement.appendChild(closeelement);
  containerelement.appendChild(contentelement);
  body.appendChild(overlayelement);
})