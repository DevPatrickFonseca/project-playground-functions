// Desafio 1
function compareTrue(objeto1, objeto2) {
  // seu código aqui
  if (objeto1 === true && objeto2 === true) {
  return true;
  } else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(" ");
}

// Desafio 4
function concatName(stringsDaArray) {
  // seu código aqui
  return `${stringsDaArray[stringsDaArray.length - 1]}, ${stringsDaArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(bigNumbers) {
  // seu código aqui
  let allNumbers = bighestNumber(bigNumbers);
  let numeros = 0;

  for (let index in bigNumbers) {
    if (bigNumbers[index] === allNumbers) {
      numeros += 1;
    }
  }
  return numeros;
}

function bighestNumber(numbers) {
  let maior;

  for (let index = 0; index < numbers.length; index += 1) {
    (numbers[index]);
    if (index === 0) {
    maior = numbers[index];
    } else if (numbers[index] > maior) {
    maior = numbers[index]
    }
  }
  return maior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let position1 = cat1 - mouse;
  let position2 = cat2 - mouse;

  if (position1 < 0) {
    position1 *= -1;
  }
  if (position2 < 0) {
    position2 *= -1;
  }

  if (position1 < position2) {
    return `cat1`;
  } else if (position2 < position1) {
    return `cat2`;
  } else if (position1 === position2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};