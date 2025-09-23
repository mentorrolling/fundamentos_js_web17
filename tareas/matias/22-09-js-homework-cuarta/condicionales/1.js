//1-Escribe un programa que solicite al usuario un número y determine si es positivo, negativo o cero.

let numero = Number(prompt("Ingrese su Numero 🤔"));

if (numero > 0) {
  alert(`${numero} es un numero positivo😄`);
} else if (numero < 0) {
  alert(`${numero} es un numero negativo😧`);
} else {
  alert("El numero es cero😡");
}
