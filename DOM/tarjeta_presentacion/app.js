let inputNombre = document.getElementById("nombre");
let inputEmail = document.getElementById("email");
let inputRol = document.getElementById("rol");
let inputImage = document.getElementById("image");

function cargarDatosEnTarjeta() {
  let cabecera = document.querySelector("#cabecera");

  let contacto = document.querySelector("#contacto");
  let puesto = document.querySelector("#puesto");
  let foto = document.querySelector("img");
  let validar = validarCampos();

  if (validar) {
    cabecera.innerHTML = inputNombre.value;
    foto.src = inputImage.value;
    contacto.innerHTML = inputEmail.value;
    puesto.innerHTML = inputRol.value;
  } else {
    alert("Faltan datos obligatorios");
  }
}

document
  .querySelector("#btn-carga")
  .addEventListener("click", cargarDatosEnTarjeta);

function validarCampos() {
  if (
    inputNombre.value &&
    inputEmail.value &&
    inputImage.value &&
    inputRol.value
  ) {
    return true;
  } else {
    return false;
  }
}
