global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const muestra = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
  },
  {
      "id": 158,
    "name": "Hookah Alien",
    "status": "Alive",
    "species": "Alien",
    "type": "Tuskfish",
    "gender": "unknown",
    "image": "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1"]
  },
  {
    "id": 326,
    "name": "Slippery Stair",
    "status": "Alive",
    "species": "Animal",
    "type": "Slug",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/11"]
  }
]

describe('example', () => {

  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
});

describe('arrayCharacterName', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterName, 'function');
  });

  it('debería retornar un "object"', () => {
    assert.equal(typeof arrayCharacterName(muestra), 'object');
  });

  it('si hago "let prueba = arrayCharacterName(muestra)", prueba[0] debería ser un "string"', () => {
    let prueba = arrayCharacterName(muestra);
    assert.equal(typeof prueba[0], 'string');
  });

  it('si hago "let prueba = arrayCharacterName(muestra)", prueba[1] debería ser "Hookah Alien"', () => {
    let prueba = arrayCharacterName(muestra);
    assert.equal(prueba[1], 'Hookah Alien');
  });
});

describe('arrayCharacterObject', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterObject, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayCharacterObject(muestra), 'object');
  });

  it('si hago "let prueba = arrayCharacterObject(muestra)", prueba[0] debería ser un "object"', () => {
    let prueba = arrayCharacterObject(muestra);
    assert.equal(typeof prueba[0], 'object');
  });

  it('si hago "let prueba = arrayCharacterObject(muestra)", prueba[0].name debería ser un "string"', () => {
    let prueba = arrayCharacterObject(muestra);
    assert.equal(typeof prueba[0].name, 'string');
  });

  it('si hago "let prueba = arrayCharacterObject(muestra)", prueba[1].name debería ser "Hookah Alien"', () => {
    let prueba = arrayCharacterObject(muestra);
    assert.equal(prueba[1].name, 'Hookah Alien');
  });
});

describe('arrayCharacterObjectByRange', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterObjectByRange, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayCharacterObjectByRange(muestra, "HRS"), 'object');
  });

  it('si hago "let prueba = arrayCharacterObjectByRange(muestra)", prueba[0] debería ser un "object"', () => {
    let prueba = arrayCharacterObjectByRange(muestra, "HRS");
    assert.equal(typeof prueba[0], 'object');
  });

  it('si hago "let prueba = arrayCharacterObjectByRange(muestra)", prueba[0].name debería ser un "string"', () => {
    let prueba = arrayCharacterObjectByRange(muestra, "HRS");
    assert.equal(typeof prueba[0].name, 'string');
  });

  it('si hago "let prueba = arrayCharacterObjectByRange(muestra)", prueba[1].name debería ser "Hookah Alien"', () => {
    let prueba = arrayCharacterObjectByRange(muestra, "HRS");
    assert.equal(prueba[1].name, 'Hookah Alien');
  });
});

describe('arrayCharacterNameByRange', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterNameByRange, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayCharacterNameByRange(muestra, "ABCDE"), 'object');
  });

  it('si hago "let prueba = arrayCharacterObjectByRange(muestra)", prueba[0] debería ser un "string"', () => {
    let prueba = arrayCharacterNameByRange(muestra, "HRS");
    assert.equal(typeof prueba[0], 'string');
  });

  it('si hago "let prueba = arrayCharacterObjectByRange(muestra)", prueba[1] debería ser "Hookah Alien"', () => {
    let prueba = arrayCharacterNameByRange(muestra, "HRS");
    assert.equal(prueba[1], 'Hookah Alien');
  });
});

describe('arrayEpisodes', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayEpisodes, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayEpisodes(muestra), 'object');
  });

  it('si hago "let prueba = arrayEpisodes(muestra)", prueba.length debería ser 31', () => {
    let prueba = arrayEpisodes(muestra);
    assert.equal(prueba.length, 31);
  });

  it('si hago "let prueba = arrayEpisodes(muestra)", prueba[15] debería ser un "string"', () => {
    let prueba = arrayEpisodes(muestra);
    assert.equal(typeof prueba[15], 'string');
  });

  it('si hago "let prueba = arrayEpisodes(muestra)", prueba[15] debería ser "https://rickandmortyapi.com/api/episode/16"', () => {
    let prueba = arrayEpisodes(muestra);
    assert.equal(prueba[15], 'https://rickandmortyapi.com/api/episode/16');
  });
});

describe('arrayEpisodesGetNumberOfEpisodes', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayEpisodesGetNumberOfEpisodes, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayEpisodesGetNumberOfEpisodes(muestra), 'object');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodes(muestra)", prueba.length debería ser 31', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodes(muestra);
    assert.equal(prueba.length, 31);
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodes(muestra)", prueba[15] debería ser un "string"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodes(muestra);
    assert.equal(typeof prueba[15], 'string');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodes(muestra)", prueba[15] debería ser "16"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodes(muestra);
    assert.equal(prueba[15], '16');
  });
});

describe('arrayEpisodesGetNumberOfEpisodesOfTheCharacter', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayEpisodesGetNumberOfEpisodesOfTheCharacter, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode), 'object');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode)", prueba.length debería ser 31', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode);
    assert.equal(prueba.length, 31);
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode)", prueba[22] debería ser un "string"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode);
    assert.equal(typeof prueba[22], 'string');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode)", prueba[22] debería ser "23"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[0].episode);
    assert.equal(prueba[22], '23');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode)", prueba.length debería ser 2', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode);
    assert.equal(prueba.length, 2);
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode)", prueba[1] debería ser un "string"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode);
    assert.equal(typeof prueba[1], 'string');
  });

  it('si hago "let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode)", prueba[1] debería ser "11"', () => {
    let prueba = arrayEpisodesGetNumberOfEpisodesOfTheCharacter(muestra[2].episode);
    assert.equal(prueba[1], '11');
  });
});

describe('showEpisodesOfTheCharacter', () => {

  it('debería ser una función', () => {
    assert.equal(typeof showEpisodesOfTheCharacter, 'function');
  });

  it('debería ser un "string"', () => {
    assert.equal(typeof showEpisodesOfTheCharacter('Slippery Stair', muestra), 'string');
  });

  it('si hago "let prueba = showEpisodesOfTheCharacter("Slippery Stair", muestra)", prueba debería ser un "string"', () => {
    let prueba = showEpisodesOfTheCharacter('Slippery Stair', muestra);
    assert.equal(typeof prueba, 'string');
  });

  it('si hago "let prueba = showEpisodesOfTheCharacter("Slippery Stair", muestra)", prueba debería ser "5 y 11"', () => {
    let prueba = showEpisodesOfTheCharacter('Slippery Stair', muestra);
    assert.equal(prueba, '5 y 11');
  });

  it('si hago "let prueba = showEpisodesOfTheCharacter("Rick Sanchez", muestra)", prueba debería ser un "string"', () => {
    let prueba = showEpisodesOfTheCharacter('Rick Sanchez', muestra);
    assert.equal(typeof prueba, 'string');
  });

  it('si hago "let prueba = showEpisodesOfTheCharacter("Rick Sanchez", muestra)", prueba debería ser "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 y 31"', () => {
    let prueba = showEpisodesOfTheCharacter('Rick Sanchez', muestra);
    assert.equal(prueba, '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 y 31');
  });//este test funciona sin el break en data.js pero cuando sacamos break, en lugar de mostrar los 26 episodios, muestra sólo episode(s): 6
});
