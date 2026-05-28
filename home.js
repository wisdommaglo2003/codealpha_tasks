let cards = JSON.parse(localStorage.getItem('crads')) || [];
let current = 0;
let flipped = false;

function displayCard() {
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const card = document.getElementById('card');

    if (cards.length === 0) {
        front.innerText = 'What is a computer?';
        back.innerText = "An electronic device that processes data into information.";
        return;
    }

    front.innerText = cards[current].question;
    back.innerText = cards[current].answer;

    card.classList.remove('flip');
    flipped = false;
}

function toggleAnswer() {
    const card = document.getElementById('card');
    card.classList.toggle('flip');
    flipped = !flipped;
}

function nextCard() {
    if (cards.length === 0) return;
    current = (current + 1) % cards.length;
    displayCard();
}

function prevCard() {
    if (cards.length === 0) return;
    current = (current - 1 + cards.length) % cards.length;
    displayCard();
}

function addCard() {
    const q = document.getElementById('question').value.trim();
    const a = document.getElementById('answer').value.trim();

    if (!q || !a) {
        alert('Please enter both question and answer');
        return;
    }

    cards.push({ question: q, answer: a });
    save();

    current = cards.length - 1;
    clearInputs();
    displayCard();
}

function editCard() {
    if (cards.length === 0) return;

    const q = document.getElementById('question').value.trim();
    const a = document.getElementById('answer').value.trim();

     if (!q || !a) {
        alert('Enter new question and answer');
        return;
    }

    cards[current] = { question: q, answer: a };
    save();
    clearInputs();
    displayCard();
}

function deleteCard() {
    if (cards.length === 0) return;

    cards.splice(current, 1);

    if (current >= cards.length) current = cards.length - 1;
    if (current < 0) current = 0;

    save();
    displayCard();
}

function save() {
    localStorage.setItem('cards', JSON.stringify(cards));
}

function clearInputs() {
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
}

displayCard();
