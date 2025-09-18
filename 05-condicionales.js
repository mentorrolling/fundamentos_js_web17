//condicionales
//if, else, if else

// if (condicion) {
//   //acciones
// } else {
//   //acciones si no se cumple la condición
// }

// si condicion entonces acciones
// sino otras acciones o nada

let edad = Number(prompt("Ingrese su edad"));

if (edad === 0) {
  console.log("Debe ingresar un número mayor que 0");
} else if (isNaN(edad)) {
  console.log("No ingresó un número");
} else if (edad > 100) {
  console.log("Eres un inmortal!!");
} else if (edad >= 18) {
  console.log("Eres mayor de edad 😎");
} else {
  console.log("Eres un menor 😭");
}

let esMayorDeEdad = confirm("Eres mayor de edad?🤔");

if (esMayorDeEdad) {
  console.log("Bienvenido a la fiesta!!🎉");
} else {
  console.log("No te podemos recibir, anda pa aya 😭");
}

let mensaje = "Hola";
if (mensaje != null) {
  console.log(mensaje);
}

//switch

let diaActual = new Date().getDay();

switch (diaActual) {
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miércoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábdo");
    break;
  default:
    console.log("Hoy es Domingo");
    break;
}

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%

ALGORITMO
----------
- Datos de entrada: monto de la compra
- Proceso: tomo el monto que ingresa el usuario, comparamos con los valores que podrian tener descuento, si coincide con alguno hago el calculo del descuento, sino dejo el monto como estaba. Mostrar el monto final.
- Salida: Un mensaje que diga el descuento aplicado y el monto a pagar.
*/

let montoIngresado = Number(prompt("Ingrese el monto de la compra"));
let montoConDescuento = 0;

switch (true) {
  case montoIngresado < 100:
    console.log("Monto menor que 100");
    break;
  default:
    console.log("No se como sigue");
    break;
}
