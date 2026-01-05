const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const ball = document.getElementById("ball");

const emojis = ['🍒', '🍋', '🍊'];

function randomEmoji() {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
}

function start() {
    if (balance <= 0) {
        alert("Баланс закончился");
        return;
    }

    slot1.textContent = randomEmoji();
    slot2.textContent = randomEmoji();
    slot3.textContent = randomEmoji();

    win();
}

const button = document.getElementById("button1");
button.addEventListener("click", start);

slot1.textContent = '❔';
slot2.textContent = '❔';
slot3.textContent = '❔';

const amount = "БАЛАНС: ";
let balance = 100;

const answer = amount + balance;
ball.textContent = answer;

function win() {
    if (
        slot1.textContent === slot2.textContent &&
        slot2.textContent === slot3.textContent
    ) {
        balance += 100;
    } else {
        balance -= 10;
    }

    const answer = amount + balance;
    ball.textContent = answer;
}
