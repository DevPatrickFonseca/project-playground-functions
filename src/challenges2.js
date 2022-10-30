// Desafio 11
function generatePhoneNumber(numbPS) {
  // seu código aqui
  let phoneStyle = `(${numbPS[0]}${numbPS[1]}) ${numbPS[2]}${numbPS[3]}${numbPS[4]}${numbPS[5]}${numbPS[6]}-${numbPS[7]}${numbPS[8]}${numbPS[9]}${numbPS[10]}`;

  if (numbPS.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (numbPS.length < 11 || numbPS.length > 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < numbPS.length; i += 1) {
    let sizeNum = numbPS[i];

  if (sizeNum < 0 || sizeNum > 9 || repNum(numbPS)) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneStyle;
}

function repNum(numbPS) {
  for (let i1 = 0; i1 < numbPS.length; i1 += 1) {
    let equalNum = 0;

    for (let i2 = 0; i2 < numbPS.length; i2 += 1) {
      if (numbPS[i1] === numbPS[i2]) {
        equalNum += 1;
      }
    }
    if (equalNum >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const checkSides = sideCondition(lineA, lineB, lineC);

  if (checkSides[0] && checkSides[1] && checkSides[2]) {
    return true;
  }
  return false;
}

// Checar se cumpre condições para cada lado
function sideCondition(sideA, sideB, sideC) {

  const returnSides = [];
  // Se cumprir as condições enviar para a array returnSides
  returnSides.push(sideA < sideB + sideC) && (sideA > Math.abs(sideB - sideC));
  returnSides.push(sideB < sideA + sideC) && (sideB > Math.abs(sideA - sideC));
  returnSides.push(sideC < sideA + sideB) && (sideC > Math.abs(sideA - sideB));

  return returnSides;
};

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
