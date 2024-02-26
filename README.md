Carosello Mono Array
===
**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.<br>
**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.<br>
**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.<br>
**MILESTONE 3**
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.<br>
**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.<br>
**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.<br>
**Prima di partire a scrivere codice:**
Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una **mezz’ora**, così da non perdere di vista il focus dell’esercizio.<br>
**Consigli del giorno:**
1. Costruiamo del carosello una versione statica contenente solamente un’immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come “template”.
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”
# Svolgimento

1. Mi creo la struttura html con un box sliders che conterà le immagini ed i due bottoni per lo scorrimento.
2. Inserisco tutti i prcorsi delle immagini in un array
3. inserisco in items-wrapper tutti gli elementi html contenenti l'immagine con la classe hide
4. tolgo la classe hide al primo elemento
5. creo un ciclo delle immagini e ad ogni ciclo aggiungo il tag con l'immagine ciclata 
6. prendo tutti gli elementi con la classe img
7. inizializzo un contatore a zero
8. al click delle frecce incremento o decremento il counter
7. rimetto la classe hide all'elemento con l'indice attuale che si incrementa o si decrementa
8. tolgo la classe hide all'elemento a indice contatore che si è incrementato o decrementato
9. ad ogni click controllo l'indice, se il contatore è === 0 al bottone btnDown aggiungo la classe hide (situazione di default), se invece il contatore è === alla lunghezza dell'arrey - 1 aggiungo la classe hide a btnUp

10. al click di btnUp si toglie la classe hide di bottone left
