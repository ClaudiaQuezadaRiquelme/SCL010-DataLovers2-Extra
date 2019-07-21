/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

//const RMData = window.RICKANDMORTY;

const arrayCharacterName = (RMDataResults) => {//guarda los nombres de los personajes en un array y lo retorna
  let arrayCharacter = [];
    for (let i=0; i<RMDataResults.length; i++) {
      arrayCharacter.push(RMDataResults[i].name);
    }
    return arrayCharacter;//son 493 personajes
}

const arrayCharacterObject = (RMDataResults) => {//guarda los objetos personajes en un array y lo retorna
  let arrayCharacter = [];
  for (let i=0; i<RMDataResults.length; i++) {
    arrayCharacter.push(RMDataResults[i]);
  }
  return arrayCharacter;//son 493 personajes
}

const arrayCharacterObjectByRange = (RMDataResults, stringRange) => {
  let arrayCharacterByRange = [];
  let arrayCharacter = arrayCharacterObject(RMDataResults);
  for (let i=0; i<arrayCharacter.length; i++) {
    for (let j=0; j<stringRange.length; j++) {
      if (!((arrayCharacter[i].name.charAt(0)).localeCompare(stringRange.charAt(j)))){
        arrayCharacterByRange.push(arrayCharacter[i]);
      }
    }
  }
  return arrayCharacterByRange;
}

const arrayCharacterNameByRange = (RMDataResults, stringRange) => {
  let arrayCharacterByRange = [];
  let arrayCharacter = arrayCharacterName(RMDataResults);
  for (let i=0; i<arrayCharacter.length; i++) {
    for (let j=0; j<stringRange.length; j++) {
      if (!((arrayCharacter[i].charAt(0)).localeCompare(stringRange.charAt(j)))){
        arrayCharacterByRange.push(arrayCharacter[i]);
      }
    }
  }
  return arrayCharacterByRange;
}



//window.RMData = RMData;
window.arrayCharacterName = arrayCharacterName;
window.arrayCharacterObject = arrayCharacterObject;
window.arrayCharacterObjectByRange = arrayCharacterObjectByRange;
window.arrayCharacterNameByRange = arrayCharacterNameByRange;
