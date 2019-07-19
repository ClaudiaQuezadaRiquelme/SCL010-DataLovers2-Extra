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

//select-option dináMicroverse
