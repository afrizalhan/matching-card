const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let papanMati = false;
var samaCount = 0;
let firstCard, secondCard;

function flipCard(){
    if (papanMati) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        return;
    }  

    secondCard = this
    cekSama();
    if(samaCount === 6){
        document.getElementById("selesai").classList.remove('hidea');
        document.getElementById("memory").classList.add('hide');
    }
    }
function sama(){
    samaCount++;
}
function cekSama(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;  
    isMatch ? disableCard() : unflipCard();

}
function disableCard(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    sama();
    resetPapan();
}

function unflipCard(){
    papanMati = true;
    setTimeout(() => {
        firstCard.classList.remove('flip'); 
        secondCard.classList.remove('flip'); 

        resetPapan();
     }, 1500);
}

function resetPapan(){
    [hasFlippedCard, papanMati] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function kocok(){
    cards.forEach(card => {
        let kocokPos = Math.floor(Math.random() * 12);
        card.style.order = kocokPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard))