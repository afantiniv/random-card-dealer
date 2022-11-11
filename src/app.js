import "./style.css";

window.onload = function() {
  generarCarta(valores, naipes);
};

let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let naipes = ["corazon", "diamantes", "trebol", "espadas"];

function aleatorioArreglo(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function crearDivClass(clase) {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.setAttribute("class", clase);
  console.log(nuevoDiv);
  return nuevoDiv;
}

function agregarDivs(divPadre, divHijos) {
  for (let i = 0; i < divHijos.length; i++) {
    divPadre.appendChild(divHijos[i]);
  }
}

function generarCarta(x, y) {
  let valor = aleatorioArreglo(x);
  let palo = aleatorioArreglo(y);

  let tipoCarta = "carta" + " " + palo;
  let divCarta = crearDivClass(tipoCarta);
  let divHeader = crearDivClass("carta-icon-header");
  let divFooter = crearDivClass("carta-icon-footer");

  let divValor = crearDivClass("carta-val");

  if (valor === "A") {
    divValor = crearDivClass("a-carta-val");
    divHeader.classList.remove("carta-icon-header");
    divHeader = crearDivClass("a-carta-header");
    divHeader.innerHTML = valor;

    divFooter.classList.remove("carta-icon-footer");
    divFooter = crearDivClass("a-carta-footer");
    divFooter.innerHTML = valor;
  } else {
    divValor.innerHTML = valor;
  }

  let divsHijos = [divHeader, divValor, divFooter];
  agregarDivs(divCarta, divsHijos);

  let divWrapper = crearDivClass("wrapper");
  let divBody = document.getElementsByTagName("body")[0];

  agregarDivs(divWrapper, [divCarta]);
  agregarDivs(divBody, [divWrapper]);
}
