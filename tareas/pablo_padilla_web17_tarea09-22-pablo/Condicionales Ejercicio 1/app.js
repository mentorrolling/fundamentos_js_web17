/*
Entrada: numero (string)
Algoritmo: Se ingresa un número y si es cero se muestra el mensaje "El número ingresado es cero". 
Pero si el número ingresado es mayor que cero se muestra el mensaje "El número es positivo", sino 
se muestra el mensaje "el número es negativo".
Salida: mensaje de texto (string)
*/
let numero = prompt("Ingrese un número: ","");
if(isNaN(numero) == true || typeof(numero) == 'object' || numero.trim().length == 0){
    alert("Dato incorrecto. Debe ser un número.");
}
else if(Number(numero) == 0){
    alert("El número ingresado es cero.");
}
else if(Number(numero) > 0){
    alert("El número es positivo.");
}
else{
    alert("El número es negativo.");
}