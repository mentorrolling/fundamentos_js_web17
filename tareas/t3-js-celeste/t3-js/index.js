/*Tarea 1*/
/*Cantidad de caracteres*/ 
let apellido = prompt("Indrese su apellido");
console.log("Cantidad de caracteres de su apellido: ", apellido.length);

/*obtener la ultima letra del apellido*/
console.log("La ultima letra de su apellido es: ", apellido.slice(3,4));

/*Tarea 2 */
let palabra = "marmota";
console.log(palabra.toUpperCase());
console.log(palabra.charAt(0).toUpperCase()+palabra.slice(1,palabra.length));

/*MATH */
let numero = Number(prompt("Ingrese un numero con 5 o mas decimales"));

console.log("El número redondeado a su valor más bajo: ", Math.floor(numero));
console.log("El número con dos decimales: ", numero.toFixed(2))
console.log("El número elevado al cubo: ", Math.pow(numero, 3));
console.log("La raíz cuadrada del número ingresado: ", Math.sqrt(numero));
let aleatorio = Math.floor(Math.random() * 9) + 1; 
console.log("Número aleatorio: ", aleatorio);
console.log("Resultado de la multiplicación:", numero * aleatorio);



/*Condicionales (Todos los ejercicios deben tener su algoritmo) */

/*Escribe un programa que solicite al usuario un número y determine si es positivo, negativo o cero. */

/*ENTRADA: numero real
  SALIDA: mensaje que dice si el numero ingresado es positivo o negativo 
  PRODECIMIENTO:
                LEER numero
                SI numero > 0 ENTONCES:
                    ESCRIBIR: "El numero ingresado es positivo"
                SINO SI numero < 0 ENTONCES:
                    ESCRIBIR: "El numero ingresado es negativo"
                SINO:
                    ESCRIBIR: "El numero ingresado es  0"*/

let numero2 = Number(prompt("Ingrese un número: "))

if (numero2 > 0 ){
    console.log("El número ingresado es positivo");
}
else if(numero2 < 0 ){
    console.log("El número ingresado es negativo");
}
else{
    console.log("El numero es cero");
}
/*OTRA FORMA */

switch(true){
    case numero2 > 0: console.log("El número ingresado es positivo"); break;
    case numero2 < 0: console.log("El número ingresado es negativo"); break;
    default: console.log("El numero es cero"); break;
}

/*Escribe un programa que se use para acceso a una fiesta:

Solo puede entrar un mayor de edad, osea debe tener 18 años o más. Si no es mayor de edad entonces debe ir acompañado de un tutor */

/*ENTRADA: edad de tipo entero positivo > 0 
  SALIDA: mensaje
  PROCEDIMIENTO:   
                LEER edad
                SI edad >= 18  y edad <= 100 ENTONCES:
                    ESCRIBIR: "Es mayor de edad, puede ingresar"
                SINO SI(edad > 0 y edad < 18):
                    ESCRIBIR: "Es menor de edad, debe ingresar con un acompañante"*/

let edad = Number(prompt("Ingrese su edad: "));

if (edad >= 18 && edad <=100){
    console.log("Es mayor de edad, puede ingresar");
}
else if(edad > 0 && edad < 18){
        console.log("Es menor de edad, debe ingresar con un acompañante")
    }
else{
    console.log("Debe ingresar un valor válido")
}
/*Un comerciante hace descuentos a sus clientes de la siguiente forma:

Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15% */

/* ENTRADA: monto de la compra entero positivo
   SALIDA: mensaje
   AUXILIARES: monto_total  y descuento: total entero positivo
   PROCEDIMIENTO:
                LEER monto
                SEGUN monto:
                    CASO monto < 100: 
                        descuento = 0
                    CASO monto >= 100 y monto <= 300:
                        descuento = 0.05
                    CASO monto > 300 y monto <= 500:
                        descuento = 0.1
                    CASO monto > 500:
                        descuento = 0.15
                FIN SEGUN
                monto_total = monto - (monto * descuento))
                ESCRIBIR: "EL monto total a pagar es: monto_total" */

let monto = Number(prompt("Ingrese el monto de la compra: "));
let descuento = 0;

switch(true){
    case monto < 100:
        console.log("El monto total a pagar es : ", monto); break;
    case (monto >= 100 && monto < 300):
        console.log("El monto total a pagar es :", monto - (monto * 0.05)); break;
    case (monto >= 300 && monto < 500):
        console.log("El monto total a pagar es :", monto - (monto * 0.1)); break;
    default:
        console.log("El monto total a pagar es :", monto - (monto * 0.15)); break;
}
