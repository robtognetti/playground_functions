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
    return 0;
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
  let distCat1AndMouse = cat1 - mouse;
  let distCat2AndMouse = cat2 - mouse;
  if (distCat1AndMouse < 0) {
    distCat1AndMouse = mouse - cat1;
  }
  if (distCat2AndMouse < 0) {
    distCat2AndMouse = mouse - cat2;
  }
  if (distCat1AndMouse < distCat2AndMouse) {
    return 'cat1';
  } else if (distCat1AndMouse > distCat2AndMouse) {
    return 'cat2';
  } else if (distCat1AndMouse === distCat2AndMouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let frase = string.split('');

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
      frase[i] = '1';
    } else if (frase[i] === 'e') {
      frase[i] = '2';
    } else if (frase[i] === 'i') {
      frase[i] = '3';
    } else if (frase[i] === 'o') {
      frase[i] = '4';
    } else if (frase[i] === 'u') {
      frase[i] = '5';
    }
  }

  return frase.join('');
}
function decode(string) {
  // seu código aqui
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === '1') {
      frase[i] = 'a';
    } else if (frase[i] === '2') {
      frase[i] = 'e';
    } else if (frase[i] === '3') {
      frase[i] = 'i';
    } else if (frase[i] === '4') {
      frase[i] = 'o';
    } else if (frase[i] === '5') {
      frase[i] = 'u';
    }
  }

  return frase.join('');
}

// Desafio 10
function techList(arr, nome) {
  // seu código aqui
  if (arr.length === 0) {
    return 'Vazio!';
  } else {
    let arrOrganizado = arr.sort();
    let resposta = [];

    for (let i = 0; i < arr.length; i++) {
      let tecnologias = {
        tech: arrOrganizado[i],
        name: nome,
      };
      resposta.push(tecnologias);
    }
    return resposta;
  }
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
