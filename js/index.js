document.getElementById("buttonText").addEventListener("click", function () {
    // Obtenemos el valor del input
    const inputText = document.getElementById("inputText").value;
  
    // Guardamos el valor en el localStorage con la clave "datoIngresado"
    localStorage.setItem("datoIngresado", inputText);
  
    // Confirmación de que se guardó correctamente
    console.log("Dato guardado en localStorage:", inputText);
  });