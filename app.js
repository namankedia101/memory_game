const cardArray = [
  {
    name: 'bear',
    src: './images/bear.jpg',
  },
  {
    name: 'cat',
    src: './images/cat.jpg',
  },
  {
    name: 'deer',
    src: './images/deer.jpg',
  },
  {
    name: 'fox',
    src: './images/fox.jpg',
  },
  {
    name: 'panda',
    src: './images/panda.jpg',
  },
  {
    name: 'tiger',
    src: './images/tiger.jpg',
  },
  {
    name: 'bear',
    src: './images/bear.jpg',
  },
  {
    name: 'cat',
    src: './images/cat.jpg',
  },
  {
    name: 'deer',
    src: './images/deer.jpg',
  },
  {
    name: 'fox',
    src: './images/fox.jpg',
  },
  {
    name: 'panda',
    src: './images/panda.jpg',
  },
  {
    name: 'tiger',
    src: './images/tiger.jpg',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let selectedCards = [];
let selectedCardsId = [];
let cardsWon = [];

function createCards() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './images/blank.jpg');
    card.setAttribute('data-id', i);
    gridDisplay.append(card);
    card.addEventListener('click', showCard);
  }
}

function check() {
  const cards = document.querySelectorAll('img');
  if (
    selectedCards[0] === selectedCards[1] &&
    selectedCardsId[0] === selectedCardsId[1]
  ) {
    alert('Same image selected');
    cards[selectedCardsId[0]].setAttribute('src', './images/blank.jpg');
  } else if (
    selectedCards[0] === selectedCards[1] &&
    selectedCardsId[0] != selectedCardsId[1]
  ) {
    cardsWon.push(selectedCards[0]);
    resultDisplay.innerHTML = cardsWon.length;
    cards[selectedCardsId[0]].setAttribute('src', './images/white.jpg');
    cards[selectedCardsId[1]].setAttribute('src', './images/white.jpg');
    cards[selectedCardsId[0]].removeEventListener('click', showCard);
    cards[selectedCardsId[1]].removeEventListener('click', showCard);
  } else {
    cards[selectedCardsId[0]].setAttribute('src', './images/blank.jpg');
    cards[selectedCardsId[1]].setAttribute('src', './images/blank.jpg');
  }
  selectedCards = [];
  selectedCardsId = [];
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
  }
}

function showCard() {
  const cardId = this.getAttribute('data-id');
  const cardName = cardArray[cardId].name;
  this.setAttribute('src', cardArray[cardId].src);
  selectedCards.push(cardName);
  selectedCardsId.push(cardId);
  if (selectedCards.length == 2) {
    setTimeout(check, 500);
  }
}

createCards();
