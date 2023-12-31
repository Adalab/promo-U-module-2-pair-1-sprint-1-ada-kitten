'use strict';
const kittenList= document.querySelector(".js-list");
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const input_search_desc = document.querySelector('.js_in_search_desc');



// const kitten1Image = 'https://dev.adalab.es/gato-siames.webp';

// const kitten1Name = ('Anastacio' .toUpperCase());

// const kitten1Desc =
//   ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

// const kitten1Race = 'Siamés';

// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${kitten1Image}"
//     alt="gatito"
//   />
//   <h3 class="card_title">${kitten1Name}</h3>
//   <h4 class="card_race">${kitten1Race}</h4>
//   <p class="card_description">
//             ${kitten1Desc}
//    </p>
// </article>
// </li>`;

// const kitten2Image = 'https://dev.adalab.es/sphynx-gato.webp';

// const kitten2Name = ('Fiona' .toUpperCase());

// const kitten2Desc =
//   `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
//   hasta con pinta de alienígena han llegado a definir a esta raza
//   gatuna que se caracteriza por la «ausencia» de pelo.`;

// const kitten2Race = 'Sphynx';

// const kittenTwo = `<li class="card">
// <img
//   class="card_img"
//   src="${kitten2Image}"
//   alt="sphynx-cat"
// />
// <h3 class="card_title">${kitten2Name}</h3>
// <h4 class="card_race">${kitten2Race}</h4>
// <p class="card_description">
//   ${kitten2Desc}
// </p>
// </li>`;

// const kitten3Image = 'https://dev.adalab.es/maine-coon-cat.webp';

// const kitten3Name = ('Cielo' .toUpperCase());

// const kitten3Desc =
//   `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
//   bella mirada se ha convertido en una de sus señas de identidad.
//   Sus ojos son grandes y las orejas resultan largas y en punta.`;

// const kitten3Race = 'Maine Coon';

// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src="${kitten3Image}"
//   alt="maine-coon-cat"
// />
// <h3 class="card_title">${kitten3Name}</h3>
// <h4 class="card_race">${kitten3Race}</h4>
// <p class="card_description">
//   ${kitten3Desc}
// </p>
// </li>`;

// if( kitten1Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenOne;
// }

// if( kitten2Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenTwo;
// }
// if( kitten3Desc.includes(descrSearchText) ) {
//   kittenList.innerHTML = kittenThree;
//   }

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine coon',
};

const kittenOne = `<li class="card">
  <article>
    <img class="card_img" src="${kittenData_1.image}"
    alt="gatito">
    <h3 class="card_title">${kittenData_1.name}</h3>
    <h4 class="card_race">${kittenData_1.race}</h4>
    <p class="card_description"> ${kittenData_1.desc}</p>
    </article>
 </li>`;

 const kittenTwo = `<li class="card">
  <article>
    <img class="card_img" src="${kittenData_2.image}"
    alt="gatito">
    <h3 class="card_title">${kittenData_2.name}</h3>
    <h4 class="card_race">${kittenData_2.race}</h4>
    <p class="card_description"> ${kittenData_2.desc}</p>
    </article>
 </li>`;

 const kittenThree = `<li class="card">
  <article>
    <img class="card_img" src="${kittenData_3.image}"
    alt="gatito">
    <h3 class="card_title">${kittenData_3.name}</h3>
    <h4 class="card_race">${kittenData_3.race}</h4>
    <p class="card_description"> ${kittenData_3.desc}</p>
    </article>
 </li>`;

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const addBtn = document.querySelector('.js-btn-add');
const deleteNone = document.querySelector('.collapsed');

addBtn.addEventListener('click', (e) => {
deleteNone.classList.toggle('collapsed');
})

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const newForm = document.querySelector('.new-form');


// const valueDesc = inputDesc.value;
// const valuePhoto = inputPhoto.value;
// const valueName = inputName.value;


const addCat = document.querySelector('.button');

// addCat.addEventListener('click', (e) => {
//   if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//     labelMessageError.innerHTML = 'Uy! Parece que has olvidado algo';
//   } else {
//     valueDesc = inputDesc.value;
//     valuePhoto = inputPhoto.value;
//     valueName = inputName.value;
//   }
// })
// Creamos funciones para añadir y quitar la clase collapsed cuando clickamos el boton addBtn

function warningNewKitten(event) {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = 'Uy! Parece que has olvidado algo';
    } else {
    valueDesc = inputDesc.value;
    valuePhoto = inputPhoto.value;
    valueName = inputName.value;
    }
}
const buttonAdd = document.querySelector('.js-añadir');
buttonAdd.addEventListener('click', warningNewKitten);

function showNewCatForm() {
  newForm.classList.remove('collapsed');
};
function hideNewCatForm() {
  newForm.classList.add('collapsed');
};
// Funcion manejadora que llamaremos cuando el cliente haga click
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
};

// Llamamos a la funcion para que se ejecute
 addBtn.addEventListener('click', handleClickNewCatForm);

// Evento click y que filtre la informacion que introduce la usuaria, para que muestre solo los gatitos que encajen con la descripcion. 

// const input_search_desc = document.querySelector('.js_in_search_desc');

// const descrSearchText = input_search_desc.value;

const buttonSearch = document.querySelector('.js-button-search');

const filterKitten = (event) => {
  event.preventDefault();
  // declaramos la constante del valor del input (no entiendo porque dentro si funciona y fuera no funcionaba)
  const descrSearchText = input_search_desc.value;
  // necesitamos limpiar la lista de gatitos antes de que empiece a mostrarnos el que queremos
  kittenList.innerHTML = ''; 
  if (kitten1Desc.includes(descrSearchText.toLowerCase())) {
    kittenList.innerHTML += kittenOne;
  }
  if (kitten2Desc.includes(descrSearchText.toLowerCase())) {
    kittenList.innerHTML += kittenTwo;
  }
  if (kitten3Desc.includes(descrSearchText.toLowerCase())) {
    kittenList.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener('click', filterKitten);