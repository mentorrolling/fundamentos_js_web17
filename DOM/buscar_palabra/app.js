let palabra = document.querySelector("#palabra");
let texto = document.querySelector("#texto");
let mensajeOk = document.getElementById("mensaje_correcto");
let mensajeError = document.getElementById("mensaje_error");
limpiarMensajes();

const buscarPalabra = () => {
  limpiarMensajes();
  let textoArray = texto.value.split(" ");
  console.log(textoArray);
  let validar = textoArray.find(
    (item) =>
      item.toLowerCase() === palabra.value.toLowerCase() ||
      item.toLowerCase() === palabra.value.toLowerCase() + "," ||
      item.toLowerCase() === palabra.value.toLowerCase() + "..."
  );
  console.log(validar);

  if (validar) {
    mensajeOk.classList.remove("d-none");
    mensajeOk.classList.add("d-block");
    mensajeOk.innerHTML = `<strong>En buena hora!🤩</strong> La palabra "${palabra.value}" existe en el texto.`;
  } else {
    mensajeError.classList.remove("d-none");
    mensajeError.classList.add("d-block");
    mensajeError.innerHTML = `  <strong>Malas noticias 😞</strong> La palabra "${palabra.value}" no se encuentra en el
            texto.`;
  }
};

function limpiarMensajes() {
  mensajeOk.classList.add("d-none");
  mensajeError.classList.add("d-none");
}

function limpiarInput() {
  palabra.value = "";
  limpiarMensajes();
}
