const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const ball = document.getElementById("ball");
const button = document.getElementById("button1");

const emojis = ['🍒', '🍋', '🍊'];

let balance = 100;
const amount = "БАЛАНС: ";

slot1.textContent = '❔';
slot2.textContent = '❔';
slot3.textContent = '❔';
ball.textContent = amount + balance;

function randomEmoji() {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
}

button.addEventListener("click", start);

function start() {
    if (balance <= 0) {
        alert("Баланс закончился");
        return;
    }

    button.disabled = true;

    const steps = 60;
    let delay = 30;
    const slow = 1.05;

    const final1 = randomEmoji();
    const final2 = randomEmoji();
    const final3 = randomEmoji();

    let step = 0;

    function animate() {
        step++;

        slot1.textContent = randomEmoji();
        slot2.textContent = randomEmoji();
        slot3.textContent = randomEmoji();

        if (step < steps) {
            delay *= slow;
            setTimeout(animate, delay);
        } else {
            slot1.textContent = final1;
            slot2.textContent = final2;
            slot3.textContent = final3;

            win();
            button.disabled = false;
        }
    }

    animate();
}

function win() {
    if (
        slot1.textContent === slot2.textContent &&
        slot2.textContent === slot3.textContent
    ) {
        balance += 100;
    } else {
        balance -= 10;
    }

    ball.textContent = amount + balance;
}
