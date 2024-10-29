// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const dataStrings = {
  firstFloor: {
    vowels: [] // Vocales
  },
  secondFloor: {
    consonants: [] // Consonantes
  },

  fourthFloor: {
    asciiCode: [] // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [] // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const analizePhrase = phrase => {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyzñ';
  const abecedary = 'abcdefghijklmnopqrstuvwxyz';

  let wordsUppercase = '';
  let wordsLowercase = '';

  for (const letter of phrase.toLowerCase()) {
    if (vowels.includes(letter)) {
      dataStrings.firstFloor.vowels.push(letter);
    } else if (consonants.includes(letter)) {
      dataStrings.secondFloor.consonants.push(letter);
    }

    dataStrings.fourthFloor.asciiCode.push(letter.charCodeAt(0));

    if (letter !== ' ') {
      wordsUppercase += letter.toUpperCase();
      wordsLowercase += letter.toLowerCase();
    } else {
      dataStrings.fifthFloor.wordsInUppercase.push(wordsUppercase);
      dataStrings.fifthFloor.wordsInLowercase.push(wordsLowercase);
      wordsUppercase = '';
      wordsLowercase = '';
    }

    // Codificar frase (secretCode)
    if (vowels.includes(letter)) {
      dataStrings.sixthFloor.secretCode += String(vowels.indexOf(letter) + 1); // a-1, e-2, i-3, o-4, u-5
    } else if (consonants.includes(letter)) {
      let index = consonants.indexOf(letter);
      if (index === 0) {
        index = consonants.length - 1;
      }
      dataStrings.sixthFloor.secretCode += consonants[index - 1];
    } else if (letter === ' ') {
      const randomPosition = Math.floor(Math.random() * abecedary.length);
      dataStrings.sixthFloor.secretCode += abecedary[randomPosition];
    } else {
      dataStrings.sixthFloor.secretCode += letter;
    }
  }

  if (wordsUppercase.length > 0) {
    dataStrings.fifthFloor.wordsInUppercase.push(wordsUppercase);
    dataStrings.fifthFloor.wordsInLowercase.push(wordsLowercase);
  }
};

analizePhrase('Si no estudias acabaras como Enrique');
console.log(dataStrings.sixthFloor.secretCode);
