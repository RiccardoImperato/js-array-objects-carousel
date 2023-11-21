'use strict'

/* Funzioni */
function autoPlay() {

    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');

    if (currentslide === domItem.length - 1 && currentThumb === domThumbItem.length - 1) {
        currentslide = 0;
        currentThumb = 0;
    }
    else {
        currentThumb++;
        currentslide++;
    }

    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');
}
/*/ Funzioni */

// Programma

// Auto play
let myFn = setInterval(autoPlay, 3000);
const play = document.querySelector('.start');
const stop = document.querySelector('.stop');

//Bottoni play e stop
play.addEventListener("click", function () {
    myFn = setInterval(autoPlay, 3000);
})

stop.addEventListener("click", function () {
    clearInterval(myFn);
})

// Array con immagini fornite
const images = [
    {
        titolo: 'Lago',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla illum.',
        immagine: '01.jpg',
    },
    {
        titolo: 'Mare',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla illum.',
        immagine: '02.jpg',
    },
    {
        titolo: 'Londra',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla illum.',
        immagine: '03.jpg',
    }, {
        titolo: 'Roma',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla illum.',
        immagine: '04.jpg',
    }, {
        titolo: 'Spiaggia',
        descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla illum.',
        immagine: '05.jpg',
    },
];

// Slide
const items = document.querySelector('.items');
let currentslide = 0;

for (let i = 0; i < images.length; i++) {
    // Creo gli elementi nel DOM e vi appendo le immagini
    const item = document.createElement('div');
    item.classList.add('item');
    const img = document.createElement('img');
    const info = document.createElement('div');
    const titolo = document.createElement('h2');
    const descrizione = document.createElement('p');

    titolo.innerHTML = images[i].titolo;
    descrizione.innerHTML = images[i].descrizione;
    info.classList.add('info');
    info.append(titolo);
    info.append(descrizione);
    item.append(info);

    // Classe active per visualizzare le immagini
    if (i === currentslide) {
        item.classList.add('active');
    }

    // Immagini
    img.src = `img/${images[i].immagine}`;
    img.alt = `Landscape ${images[i]}`;
    item.append(img);
    items.append(item);
}

// Node list
const domItem = document.querySelectorAll('.item');
console.log(domItem);

// Thumbnail
const thumb = document.querySelector('.list');
let currentThumb = 0;

for (let i = 0; i < images.length; i++) {
    // Contenitore nel DOM
    const element = document.createElement('div');
    element.classList.add('thumb-item');
    thumb.append(element);

    // Layer
    const layer = document.createElement('div');
    layer.classList.add('layer');
    element.append(layer);

    if (i === currentThumb) {
        element.classList.add('thumb-active');
    }

    // Immagini
    const img = document.createElement('img');
    img.src = `img/${images[i].immagine}`;
    img.alt = `Landscape ${images[i]}`;
    element.append(img);
}

// Node list
const domThumbItem = document.querySelectorAll('.thumb-item');
console.log(domThumbItem);

// Frecce per scorrere slides/thumbnails
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener("click", function () {
    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');
    if (currentslide === 0 && currentThumb === 0) {

        currentslide = domItem.length - 1;
        currentThumb = domThumbItem.length - 1;
    }
    else {
        currentThumb--;
        currentslide--;
    }
    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');
})

next.addEventListener("click", function () {
    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');
    if (currentslide === domItem.length - 1 && currentThumb === domThumbItem.length - 1) {
        currentslide = 0;
        currentThumb = 0;
    }
    else {
        currentThumb++;
        currentslide++;
    }
    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');
})

