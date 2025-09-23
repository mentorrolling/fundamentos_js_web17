                                    /* Tarea 1 */

let apellido = prompt("");
let cantidad = apellido.length;

console.log (apellido);
console.log(cantidad);
console.log(apellido.at(-1));
                                    /* Tarea 2 */

const palabra = "marmota";
const capitalizar = palabra.charAt(0) .toLocaleUpperCase() + palabra.slice(1) .toLocaleLowerCase();

console.log (palabra.toLocaleUpperCase());
console.log(capitalizar)

/* palabra.charAt(0) .toLocaleUpperCase() tomando la primera posicion, la posicion 0 la hacemos mayuscula */
/* palabra.slice(1) .toLocaleLowerCase() y desde la posicion 1 en adelante hacemos todo minuscula */