//2-Escribe un programa que se use para acceso a una fiesta:

//Solo puede entrar un mayor de edad, osea debe tener 18 años o más.
//si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = Number(prompt("Ingrese su edad: "));

if (isNaN(edad)) {
  alert("Tiene que ingresar un numero señor");
} else if (edad >= 106) {
  alert("Ponga su Edad Real!!!");
} else if (edad >= 18) {
  alert("Usted es mayor de edad, ingrese");
} else {
  alert("Usted es menor de edad, necesita entrar con un tutor!!");
}
