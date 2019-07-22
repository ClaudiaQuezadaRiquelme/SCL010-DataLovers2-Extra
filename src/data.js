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

const arrayEpisodes = (RMDataResults) => {
	let arrayEpisodes = []; //Array vacío donde guardaremos los Episodios
	for (let i=0; i < RMDataResults.length; i++) {//recorremos el arreglo de personajes
    if ( arrayEpisodes.length === 0){ //si el arreglo de personajes ya está vacío
			arrayEpisodes.push(RMDataResults[i].episode[0]); //guarda el primer episode de ese personajes en el arreglo de  episodios
		}//si ponemos un else, no recorrerá todos los episodios del primer personaje

    if (arrayEpisodes.length !== 0) { //si el arreglo de episodios no está vacío
			for (let x=0; x < RMDataResults[i].episode.length; x++) { //recorremos el arreglo de episodios del  personaje
				let count = 0; //contador que nos ayudará a reconocer cuando guardar el episodio en el arreglo de episodios sin que se repitan.
				for (let z=0; z < arrayEpisodes.length; z++) { //recorremos el arreglo de  episodios
					if (!(RMDataResults[i].episode [x].localeCompare(arrayEpisodes[z]))) {//si el episodio del personaje es igual a un episodio del arreglo de episodios
						continue; //continuar
					} else {
						count++; //si no, aumenta el contador
						if (count == arrayEpisodes.length) { //si el contador es igual al largo del arreglo de episodio, significa que el episodio del personaje no se ha guardado en el arreglo de episodios, por lo tanto, lo tenemos que guardar
						arrayEpisodes.push(RMDataResults[i].episode[x]); //guarda el episodio de ese personaje en el arreglo de  episodios
						}
					}
				}
			}
		}
	}
	return arrayEpisodes;
}

const arrayEpisodesGetNumberOfEpisodes = (RMDataResults) => {
  let arrayUrlEpisodes = arrayEpisodes(RMDataResults);
  let arrayEpisodesGetNumberOfEpisodes = [];
  for (let i=0; i<arrayUrlEpisodes.length; i++) {
    let numberOfTheEpisode = arrayUrlEpisodes[i].replace("https://rickandmortyapi.com/api/episode/", "");
    arrayEpisodesGetNumberOfEpisodes.push(numberOfTheEpisode);
  }
  return arrayEpisodesGetNumberOfEpisodes;
}


//window.RMData = RMData;
window.arrayCharacterName = arrayCharacterName;
window.arrayCharacterObject = arrayCharacterObject;
window.arrayCharacterObjectByRange = arrayCharacterObjectByRange;
window.arrayCharacterNameByRange = arrayCharacterNameByRange;
window.arrayEpisodes = arrayEpisodes;
window.arrayEpisodesGetNumberOfEpisodes = arrayEpisodesGetNumberOfEpisodes;
