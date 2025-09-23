//bucles
// cuando necesito repetir acciones durante un tiempo o dependiendo de una condición

//while
//mientras la condición se cumple se realiza el proceso

// while(codición){

//     //procesos
// }

let cantidadDeInvitados = 0;
let nombreInvitado = "";

// while (cantidadDeInvitados > 0) {
//   nombreInvitado = prompt("Ingrese el nombre del invitado");
//   //template string
//   if (nombreInvitado.length >= 3) {
//     console.log(`Bienvenido/a ${nombreInvitado}🎉`);
//     cantidadDeInvitados--;
//   }
// }

//DO WHILE
// do{
//     //acciones
// }while(condición)

// do {
//   nombreInvitado = prompt("Ingrese el nombre del invitado");
//   if (nombreInvitado.length >= 3) {
//     console.log(`Bienvenido/a ${nombreInvitado}🎉`);
//     cantidadDeInvitados--;
//   }
// } while (cantidadDeInvitados > 0);

// altGr + shift + }

/*
Tabla del 2 para calcular
----------------------
Algoritmo:
- Datos de entrada: Hasta que número se calcula la tabla (N)
- Proceso: Multiplicar un número por 2 entre 1 y N
- Salida: 2 x N = resultado
*/
let tabla = Number(prompt("Ingrese la tabla a calcular"));

//validaciones

let valor = 10;
let inicio = 1;
while (valor > 0) {
  console.log(`${tabla} x ${inicio} = ${inicio * tabla}`);
  inicio++;
  valor--;
}

/*
TRIVIA
--------
El usuario debe responder la pregunta correctamente para ganar. Tendrá 3 intentos de respuesta. El programa devolverá un mensaje si el usuario ganó o perdió.


ALGORITMO:
- Datos de entrada: La pregunta, la respuesta del usuario, cantidad de intentos, la respuesta correcta.
- Proceso: El usuario ingresa la respuesta, se evalua si es correcta, si es correcta muestra el mensaje, sino vuelve a intentar. Si a los 3 intentos falla el usuario pierde.
- Salida: Mensaje si gano o perdió
*/

let pregunta = "¿Cuál es la capital de Turquía?";
let respuestaDelUsuario = "";
let cantidadDeIntentos = 3;
let respuestaCorrecta = "Ankara";
let ganasteJuego = false;

do {
  respuestaDelUsuario = prompt(
    pregunta + " tenés " + cantidadDeIntentos + " de intentos"
  );

  if (respuestaDelUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    //    ganasteJuego=true
    console.log("GANASTE!! GROSO/A!! 🎉");

    cantidadDeIntentos = 0;
  }
  cantidadDeIntentos--;
} while (cantidadDeIntentos > 0);

if (cantidadDeIntentos === 0) {
  console.log("PERDISTE!! LOSER!!😭");
}

// if(ganasteJuego ){
//     console.log('GANASTE!! GROSO/A!! 🎉')
// }else{

//     console.log('PERDISTE!! LOSER!!😭')
// }
