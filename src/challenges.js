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
  return phrase.split(' ');
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
    return 'cat1';
  } else if (position2 < position1) {
    return 'cat2';
  } else if (position1 === position2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayNumbers = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayNumbers.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      arrayNumbers.push("fizz");
    } else if (array[index] % 5 === 0) {
      arrayNumbers.push("buzz");
    } else {
      arrayNumbers.push("bug!");
    }
  } 
  return arrayNumbers;
}

// Desafio 9
function encode(phraseEncode) {
  // seu código aqui
  const characters = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5',
  };
  let newPhrase = '';

  for (let index = 0; index < phraseEncode.length; index += 1) {
    let letter = phraseEncode[index];

    if (characters[letter] !== undefined) {
      newPhrase += characters[letter];
    } else {
      newPhrase += letter;
    } 
  }
  return newPhrase;
};

function decode(phraseEncode) {
  // seu código aqui
  const characters = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  };
  let newPhrase = '';

  for (let index = 0; index < phraseEncode.length; index += 1) {
    let letter = phraseEncode[index];

    if (characters[letter] !== undefined) {
      newPhrase += characters[letter];
    } else {
      newPhrase += letter;
    } 
  }
  return newPhrase;
}

// Desafio 10
function techList(tech,name) {
  // seu código aqui
  let technologiesNames = [];

  if (tech.length === 0) {
    return "Vazio!";
  }
  tech = tech.sort()

  for (let i = 0; i < tech.length; i += 1) {
    let techName = {tech: tech[i], name: name};
    technologiesNames.push(techName);
  }
  return technologiesNames;
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