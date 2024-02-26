//Inserisco tutti i prcorsi delle immagini in un array

//elements
const itemsWrapper = document.querySelector('.items-wrapper');
const bottom = document.querySelector('.bottom');
const top = document.querySelector('.top');


let counterImg = 0;


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
   itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
    
}

//prendo tutti gli elementi con la classe img
const itemsCollection = document.getElementsByClassName('img');

//mi restituisce un html collection ovvero array che come elemento ha un elemento html 
console.log(itemsCollection);
//se seleziono il primo
console.log(itemsCollection[0]);


//al primo elemento tolgo la classe hide tramite remuve
itemsCollection[counterImg].classList.remove('hide');

//al click delle frecce incremento o decremento il counter 
bottom.addEventListener('click', function(){
    counterImg--;
})

top.addEventListener('click', function(){
    counterImg++;
})


