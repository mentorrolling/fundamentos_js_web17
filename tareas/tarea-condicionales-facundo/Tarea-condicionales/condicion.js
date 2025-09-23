// &Condicionales (Todos los ejercicios deben tener su algoritmo)


// *Escribe un programa que solicite al usuario un número y determine si es positivo, negativo o cero.
//!ALGORITMO 
// - Datos de entrada: solicitar un numero al usuario 
// - Proceso: si determinar si es  positivo, negativo o cero.
// - Proceso: mostrar un mensaje en pantalla dependiendo el signo del numero ingresado 

// let numero = Number(prompt("Ingrese un numero: "))
// if (numero > 0 ){
//    console.log("El numero ingresado es positivo ")
// }else if ( numero < 0){
//     console.log("El numero ingresado es negativo ")
// }else{
//     console.log("El numero es 0")
// }

// ^^Escribe un programa que se use para acceso a una fiesta:
// ^^Solo puede entrar un mayor de edad, osea debe tener 18 años o más.
// ^^si no es mayor de edad entonces debe ir acompañado de un tutor

//!ALGORITMO 
// - Datos de entrada: solicitar edad al usuario 
// - Proceso: si es mayor de edad puede entrar a la fiesta si no es mayor de edad puede ingresar pero con un tutor
// - Proceso: si Mostrar mensaje en pantalla 

 let edad = Number(prompt("Ingrese su edad"));
 let tutor = true
 if (edad >= 18  ){
    console.log("Puedes ingresar a la fiesta 🎉")
 }else if( edad < 18 && tutor ){
     console.log("Puedes ingresar acompañado de un tutor 😎")
 }else{
    console.warn("No puedes ingresar 😒" )
 }

 //? Un comerciante hace descuentos a sus clientes de la siguiente forma:
// ?Si ha comprado menos de 100 euros no hay descuento
// ?Si la compra está entre 100 y 300 euros le descuenta un 5%
// ?Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
// ?Si la compra supera los 500 euros le descuenta un 15%

//!ALGORITMO 
// - Datos de entrada: monto de la compra
// - Proceso: tomo el monto que ingresa el usuario, comparamos con los valores que podrian tener descuento, si coincide con alguno hago el calculo del descuento, sino dejo el monto como estaba. Mostrar el monto final.
// - Salida: Un mensaje que diga el descuento aplicado y el monto a pagar.
// 

let montoIngresado = Number(prompt("Ingrese el monto de la compra"));
let primerDescuento = 5;
let segundoDescuento = 10;
let tercerDescuento = 15 ;

switch (true) {
  case montoIngresado < 100:
    console.log("Monto menor que 100 no hay descuento");
    break;
  case montoIngresado > 100 && montoIngresado <= 300:
    console.log(`Tienes un descuento de 5% el monto a pagar es ${montoIngresado * (1 - primerDescuento /100) }`);
    break;
    case montoIngresado > 300 && montoIngresado <= 500:
    console.log(`Tienes un descuento de 10% el monto a pagar es ${montoIngresado * ( 1- segundoDescuento /100) }`);
    break;
    case montoIngresado > 500:
    console.log(`Tienes un descuento de 15% el monto a pagar es ${montoIngresado * (1- tercerDescuento /100) }`);
    break;
}
