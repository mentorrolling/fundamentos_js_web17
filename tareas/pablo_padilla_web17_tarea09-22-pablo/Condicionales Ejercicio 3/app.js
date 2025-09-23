/*
Entrada: gastos (string)
Algoritmo: Se ingresa el gasto total y se pregunta si este se encuentra entre 100 y 300
para mostrar el mensaje "Le corresponde un descuento del 5%". Caso contrario se pregunta
si esta entre 300 y 500 para mostrar el mensaje "Le corresponde un descuento del 10%",
pero si es mayor que 500 muestra el mensaje "Le corresponde un descuento del 15%". Pero
si el gasto es menor que 100 entonces muestra el mensaje "No corresponde un descuento".
Salida: mensaje(string)
*/
let gastos = prompt("Ingrese el gasto total: ","");
if( isNaN(gastos) == true || typeof(gastos) == 'object' || gastos.trim().length == 0){
    alert("El gasto ingresado es invalido. No es un número.");
}
else if(Number(gastos) > 0){
    if(100 <= Number(gastos) && Number(gastos) <= 300){
        alert("Le corresponde un descuento del 5%.");
    }
    else if( 300 < Number(gastos) && Number(gastos) <= 500 ){
        alert("Le corresponde un descuento del 10%.");
    }
    else if( 500 < Number(gastos)){
        alert("Le corresponde un descuento del 15%.");
    }
    else{
        alert("No corresponde un descuento.");
    }
}
else{
    alert("El gasto ingresado es invalido. Debe ser mayor que cero");
}