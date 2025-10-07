let inputNombre = document.getElementById("nombre");
let inputEmail = document.querySelector("#email");
let inputRol = document.getElementById("rol");
let inputImage = document.querySelector("#image");

function cargarDatosEnTarjeta() {
  let fotoPerfil = document.querySelector("img");
  let nombreCabecera = document.querySelector("#cabecera");
  let rol = document.querySelector("#puesto");
  let contacto = document.querySelector("#contacto");

  if (
    inputNombre.value &&
    inputEmail.value &&
    inputRol.value &&
    inputImage.value
  ) {
    nombreCabecera.innerText = inputNombre.value;
    rol.innerText = inputRol.value;
    contacto.innerText = inputEmail.value;
    fotoPerfil.src = inputImage.value;

    limpiarForm();
  } else {
    alert("Faltan datos en el formulario");
  }
}

function limpiarForm() {
  inputNombre.value = "";
  inputEmail.value = "";
  inputRol.value = "";
  inputImage.value = "";
}

document
  .querySelector("#btn-carga")
  .addEventListener("click", cargarDatosEnTarjeta);
