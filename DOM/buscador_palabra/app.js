let textoInput = document.querySelector("#texto");
let palabraInput = document.getElementById("palabra");
let mensajeAlert = document.querySelector("#mensaje_alert");
mensajeAlert.classList.add("d-none");
// let mensajeOk = document.getElementById("mensaje_correcto");
// let mensajeError = document.getElementById("mensaje_error");

function buscarPalabra() {
  const textoArray = textoInput.value.split(" ");
  console.log(textoArray);

  let validar = textoArray.some(
    (palabra) => palabra.toLowerCase() === palabraInput.value.toLowerCase()
  );

  if (validar) {
    crearMensaje(
      "success",
      "<strong>En buena Hora!!</strong> La palabra se encuentra en el texto."
    );
  } else {
    crearMensaje(
      "danger",
      "<strong>Malas noticias...</strong> La palabra no se encontró."
    );
  }
}

function limpiarInput() {
  palabraInput.value = "";
  limpiarMensajes();
}
function limpiarMensajes() {
  mensajeAlert.classList.add("d-none");
  mensajeAlert.classList.remove("alert-danger", "alert-success");
}

function crearMensaje(tipo, texto) {
  mensajeAlert.classList.add(`alert-${tipo}`);
  mensajeAlert.innerHTML = texto;
  mensajeAlert.classList.remove("d-none");
}
