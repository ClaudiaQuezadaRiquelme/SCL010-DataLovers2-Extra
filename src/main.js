/* Manejo del DOM */
//poner imagen en id="imgTitle al azar entre dos opciones"
let i = Math.floor(Math.random() * 100);// returns a random integer from 0 to 99
if (i%2 === 0){
  let imgNode = document.createElement("img");
  imgNode.src= "img/rickandmorty1.jpg";
  imgNode.alt="Portada de Rick and Morty";
  document.getElementById("imgTitle").appendChild(imgNode);
} else {
  let imgNode = document.createElement("img");
  imgNode.src= "img/rickandmorty2.jpg";
  imgNode.alt="Portada de Rick and Morty";
  document.getElementById("imgTitle").appendChild(imgNode);
}

//Title //no funciona por: Solicitud CORS no http
let j = Math.floor(Math.random() * 100);// returns a random integer from 0 to 99
if (j < 33) {
  //console.log("menor 33");
  document.getElementById("h1").style.fontFamily = "vtksdirtyletters";
} else if (j < 66){
  //console.log("menor 66");
  document.getElementById("h1").style.fontFamily = "SomethingStrange";
} else {
  //console.log("menor 99");
  document.getElementById("h1").style.fontFamily = "youmurdererbbReg";
}

const characterSelected = document.getElementById("character");
characterSelected.addEventListener("change", ()=> {
  let arrayCharacters = window.arrayCharacterObjectByRange(window.RICKANDMORTY.results, document.getElementById("character").value);
  document.getElementById("data").innerHTML="";
  for (let i=0; i<arrayCharacters.length; i++) {
    let node = document.createElement("div");

    let img = document.createElement("img");
    img.id = "picture";
    img.src = arrayCharacters[i].image;
    node.appendChild(img);
    node.appendChild(document.createElement("br"));

    let textNode = document.createTextNode("Name: "+arrayCharacters[i].name);
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    textNode = document.createTextNode("Status: "+arrayCharacters[i].status);
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    textNode = document.createTextNode("Specie: "+arrayCharacters[i].species);
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    textNode = document.createTextNode("Type: "+arrayCharacters[i].type);
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    textNode = document.createTextNode("Gender: "+arrayCharacters[i].gender);
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    textNode = document.createTextNode("Episode(s):  "+window.showEpisodesOfTheCharacter(arrayCharacters[i].name, window.RICKANDMORTY.results));
    node.appendChild(textNode);
    node.appendChild(document.createElement("br"));

    document.getElementById("data").appendChild(node);
    node.setAttribute("id", arrayCharacters[i].name);
  }

})
//select-option dináMicroverse
//tarjeta character
// const characterSelected = document.getElementById("character");
// characterSelected.addEventListener("change", ()=> {
//   let divModal = document.createElement("DIV");
//   divNode.class = "modal";
//   let divCard = document.createElement("DIV");
//   divCard.class = "card";
//   let pName = document.createElement("p");
//   pName.
// })
