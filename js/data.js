// Obtenemos el valor del localStorage
const storedData = localStorage.getItem("datoIngresado");

// Si hay un valor almacenado, lo mostramos en el span con id "data"
if (storedData) {
  document.getElementById("data").textContent = storedData;
} else {
  document.getElementById("data").textContent = "No se ha ingresado ningún dato.";
}