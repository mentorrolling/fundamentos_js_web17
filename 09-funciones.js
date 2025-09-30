//Funciones o métodos
//código encapsulado que podemos ejecutar en cualquier momento

saludarPersona();

//Funciones declarativas

function saludarPersona() {
  //acciones o los procesos
  let nombre = prompt("Cómo te llamas?");
  console.log(`Hola, ${nombre} cómo estás?`);
}

// saludarPersona();

//Funciones anónimas

const invertirPalabra = function () {
  let palabra = prompt("Ingrese la palabra o frase");
  let palabraInvertida = palabra.split("").reverse().join("");
  console.log(`La palabra ${palabra} invertida sería: ${palabraInvertida}`);
};

//Diferencia entre funciones anónimas y declarativas

//Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
//Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

//Parámetros y argumentos
function sumarNumeros(cosita, num2) {
  console.log(`${cosita} + ${num2} = ${cosita + num2}`);
}

sumarNumeros(120, 45);
sumarNumeros(455, 789);
sumarNumeros(2, 100);

function capitalizarNombre(nombre, apellido) {
  let nombreCapitalizado =
    nombre[0].toUpperCase() + nombre.substring(1).toLowerCase();
  let apellidoCapitalizado =
    apellido[0].toUpperCase() + apellido.substring(1).toLowerCase();
  console.log(nombreCapitalizado + " " + apellidoCapitalizado);
}

const capitalizarPalabra = function (palabra) {
  let palabraCapitalizada =
    palabra[0].toUpperCase() + palabra.substring(1).toLowerCase();

  return palabraCapitalizada;
};

let nombre = capitalizarPalabra("josé");
console.log(`Hola mi estimado ${capitalizarPalabra("josé")}`);

//return
//retorna el resultado de una función
// Termina el proceso de la función
