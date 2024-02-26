//Inserisco tutti i prcorsi delle immagini in un array

//elements
const itemsWrapper = document.querySelector('.items-wrapper');


const images = [ 
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

//creo ciclo delle immagini e ad ogni ciclo aggiungo il tag con l'immagine
for(let i=0; i < images.length; i++){
    const img = images[i];
    console.log(img);
    
}