const optionsElement = document.querySelector('#options');
const displayElement = document.querySelector('#display');

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const problemLetters = [
  'a',
  'b',
  'd',
  't',
  'i',
  'l',
  'g',
  'j',
  'q'
]

function main() {
  letters.forEach((letter) => {
    optionsElement.insertAdjacentHTML('beforeend', `
      <input type="checkbox" id="${letter}" checked="true">${letter}</input><br/>
    `);
  });
}

function toggleOptions() {
  optionsElement.hidden = !optionsElement.hidden;
}

function selectAll() {
  letters.forEach((letter) => {
    document.querySelector(`#${letter}`).checked = true
  });
}

function deselectAll() {
  letters.forEach((letter) => {
    document.querySelector(`#${letter}`).checked = false
  });
}

function challenging() {
  letters.forEach((letter) => {
    document.querySelector(`#${letter}`).checked =
      problemLetters.includes(letter);
  });
}

function draw() {
  selectedLetters = [];

  letters.forEach((letter) => {
    if (document.querySelector(`#${letter}`).checked != true) return;

    selectedLetters.push(letter);
  });

  console.log(selectedLetters);

  const value = getRandomIntInclusive(0, selectedLetters.length - 1);

  displayElement.innerHTML = '';

  window.setTimeout(() => {
    displayElement.innerHTML = selectedLetters[value]
  }, 200);
}

function getRandomIntInclusive(min, max) {
  // min = inclusive, max = inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

main();
