// Desafio 11
function generatePhoneNumber(numberPS) {
  // seu código aqui
  let numberPhoneStyle = `(${numberPS[0]}${numberPS[1]}) ${numberPS[2]}${numberPS[3]}${numberPS[4]}${numberPS[5]}${numberPS[6]}-${numberPS[7]}${numberPS[8]}${numberPS[9]}${numberPS[10]}`;

  if (numberPS.length !== 11) {
    return 'Array com tamanho incorreto.';
    } else if (numberPS.length < 11 || numberPS.length > 11) {
    return 'Array com tamanho incorreto.';
    }

    for (let i = 0; i < numberPS.length; i += 1) {
      let numberSize = numberPS[i];

      if (numberSize < 0 || numberSize > 9 || repeatNumber(numberPS)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return numberPhoneStyle;
}

function repeatNumber(numberPS) {
  for (let i1 = 0; i1 < numberPS.length; i1 += 1) {
    let equalNumber = 0;

    for (let i2 = 0; i2 < numberPS.length; i2 += 1) {
      if (numberPS[i1] === numberPS[i2]) {
        equalNumber += 1;
      }
    }
    if (equalNumber >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
