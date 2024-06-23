//REQUERIMIENTO # 4
// Obtener referencias a los divs por su id
const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

// Función para cambiar el color al hacer clic
function cambiarColorNegro(event) {
  event.target.style.backgroundColor = "black";
}

// Agregar evento de clic a cada div
azul.addEventListener("click", cambiarColorNegro);
rojo.addEventListener("click", cambiarColorNegro);
verde.addEventListener("click", cambiarColorNegro);
amarillo.addEventListener("click", cambiarColorNegro);

//REQUERIMIENTO 4_A

// Event listener para manejo de teclado a , s , d
var elemento = "white";
elemento = document.getElementById("key");
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    elemento.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    elemento.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    elemento.style.backgroundColor = "skyblue";
  }
});

//REQUERIMIENTO 4_B

elemento2 = document.getElementById("key2");
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    elemento2.style.backgroundColor = "purple";
  } else if (event.key === "w") {
    elemento2.style.backgroundColor = "grey";
  } else if (event.key === "e") {
    elemento2.style.backgroundColor = "brown";
  }
});
