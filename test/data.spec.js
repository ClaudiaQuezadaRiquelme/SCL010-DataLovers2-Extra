global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const muestra = [
  {
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
});

describe('arrayCharacterObjectByRange', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterObjectByRange, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayCharacterObjectByRange(muestra, "ABCDE"), 'object');
  });
});

describe('arrayCharacterNameByRange', () => {

  it('debería ser una función', () => {
    assert.equal(typeof arrayCharacterNameByRange, 'function');
  });

  it('debería ser un "object"', () => {
    assert.equal(typeof arrayCharacterNameByRange(muestra, "ABCDE"), 'object');
  });
});
