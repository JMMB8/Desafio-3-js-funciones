// Obtener referencia al elemento
const elem = document.getElementById("ele1");

// Función para cambiar el color de fondo
function pintar(color = "green") {
  elem.style.backgroundColor = color;
}
pintar();
// Asignar evento de click al elemento
elem.addEventListener("click", function () {
  pintar("yellow");
});
