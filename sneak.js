const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const emojis = ['🍒', '🍋', '🍊'];

const 🍒 = "1";
const 🍋  = "2";
const  🍊 = "3";

function randomEmoji() {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
}

function start() {
    slot1.textContent = randomEmoji();
    slot2.textContent = randomEmoji();
    slot3.textContent = randomEmoji();
}

const button = document.getElementById("button1");
button.addEventListener("click", start);

slot1.textContent = '❔';
slot2.textContent = '❔';
slot3.textContent = '❔';

let balance = 100

function win() {
    if slot1 = slot2 , slot2 = slot3
    balance += 100 
} else {
    alert ("ты проиграль");
    
    
    
    

