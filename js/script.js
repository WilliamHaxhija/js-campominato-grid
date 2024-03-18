/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

const grid = document.querySelector('.ms-grid');
const playButton = document.querySelector('.ms-play');
playButton.addEventListener('click', function () {
    grid.classList.remove('d-none');
    grid.style.display = ('flex');
    for (let i = 1; i <= 100; i++) {
        const thisNumber = i;
        const square = generateSquare(i);
        grid.append(square);
    }
    const allSquares = document.querySelectorAll('.ms-cell');
    for (let i = 0; i < allSquares.length; i++) {
        const thisSquare = allSquares[i];
        thisSquare.addEventListener('click', function () {
            this.classList.toggle('lightblue');
            console.log(this.textContent);
        });
    }
});

// Functions
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('ms-cell');
    newSquare.innerHTML = `<span>${number}</span>`;
    return newSquare;
}