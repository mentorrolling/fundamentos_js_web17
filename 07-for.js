//for
/*
- declaramos un iterador (number)
- definir la condición
- controlar iteración (++, --)
*/

//sintaxis
//-------------
// for (let index = 0; index <= 10; index++) {
//   //acciones que se van a realizar
//   console.log(i);
// }

// tabla 2

for (let i = 1; i <= 10; i++) {
  console.log(` 2 x ${i} = ${2 * i}`);
}

//Buscar pares entre un min y un max
let min = 1;
let max = 5;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//contar la cantidad de vocales en una frase

/*
ALGORITMO
----------
- datos de entrada: Frase
- Proceso: Recorrer cada caracter de la frase y lo comparamos con las vocales, si coincide las acumulamos.
- Salida: Mensaje con la cantidad de vocales 
*/

let frase = prompt("Ingrese una palabra o frase");
let contadorVocales = 0;
let vocales = "aeiouáéíóú";
for (let i = 0; i < frase.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
      contadorVocales++;
    }
  }

  //   if (
  //     frase[i].toLowerCase() === "a" ||
  //     frase[i].toLowerCase() === "e" ||
  //     frase[i].toLowerCase() === "i" ||
  //     frase[i].toLowerCase() === "o" ||
  //     frase[i].toLowerCase() === "u"
  //   ) {
  //     contadorVocales++;
  //   }

  //   switch (frase[i].toLowerCase()) {
  //     case "a":
  //     case "e":
  //     case "i":
  //     case "o":
  //     case "u":
  //     case "á":
  //     case "é":
  //     case "í":
  //     case "ó":
  //     case "ú":
  //       contadorVocales++;
  //       break;
  //   }
}
console.log(`La cantidad de vocales es de: ${contadorVocales}`);
