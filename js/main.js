'use strict';
const kittenList= document.querySelector(".js-list");
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

const kitten1Image = 'https://dev.adalab.es/gato-siames.webp';

const kitten1Name = ('Anastacio' .toUpperCase());

const kitten1Desc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const kitten1Race = 'Siamés';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kitten1Image}"
    alt="gatito"
  />
  <h3 class="card_title">${kitten1Name}</h3>
  <h4 class="card_race">${kitten1Race}</h4>
  <p class="card_description">
            ${kitten1Desc}
   </p>
</article>
</li>`;

const kitten2Image = 'https://dev.adalab.es/sphynx-gato.webp';

const kitten2Name = ('Fiona' .toUpperCase());

const kitten2Desc =
  `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;

const kitten2Race = 'Sphynx';

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kitten2Image}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kitten2Name}</h3>
<h4 class="card_race">${kitten2Race}</h4>
<p class="card_description">
  ${kitten2Desc}
</p>
</li>`;

const kitten3Image = 'https://dev.adalab.es/maine-coon-cat.webp';

const kitten3Name = ('Cielo' .toUpperCase());

const kitten3Desc =
  `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;

const kitten3Race = 'Maine Coon';

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kitten3Image}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kitten3Name}</h3>
<h4 class="card_race">${kitten3Race}</h4>
<p class="card_description">
  ${kitten3Desc}
</p>
</li>`;

// if( kitten1Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenOne;
// }

// if( kitten2Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenTwo;
// }
// if( kitten3Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenThree;
//   }

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const addBtn = document.querySelector('.js-btn-add');
const deleteNone = document.querySelector('.collapsed');

addBtn.addEventListener('click', (e) => {
  deleteNone.classList.remove('collapsed');
})

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

const addCat = document.querySelector('.button');

addCat.addEventListener('click', (e) => {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = `Uy! Parece que has olvidado algo`;
  } else {
    valueDesc = inputDesc.value;
    valuePhoto = inputPhoto.value;
    valueName = inputName.value;
  }
})

