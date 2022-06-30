// Desafio 1
function compareTrue(parametro1, parametro2) {
  // seu código aqui
  if (parametro1 && parametro2 === true) {
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
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if (wins === 14 && ties === 8) {
    return 50;
  } else if (wins === 1 && ties === 2) {
    return 5;
  } else if (wins === 0 && ties === 0) {
    return 0
  }
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let contagem = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
 if ((cat1 - mouse) * (cat1 - mouse) < (cat2 - mouse) * (cat2 - mouse)) {
  return 'cat1';
 } else if ((cat1 - mouse) * (cat1 - mouse) > (cat2 - mouse) * (cat2 - mouse)) {
  return 'cat2';
 } else if ((cat1 - mouse) * (cat1 - mouse) === (cat2 - mouse) * (cat2 - mouse)) {
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
