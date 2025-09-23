let numero = prompt("Ingrese un número con más de 5 decimales: ","");
if(isNaN(numero) == true || typeof(numero) == 'object' || numero.trim().length == 0){
    alert("Dato incorrecto, no se ingresó un número.");
}
else if(numero.indexOf(".") == -1){
    alert("Dato incorrectose, ingresó un número sin decimales.");
}
else if(numero.slice(numero.indexOf(".") + 1).length < 5) {
    alert("Dato incorrecto. Debe haber mínimo 5 decimales.");
}
else {
    alert("Número: " + parseFloat(numero) + " .Número redondeado hacia abajo: " + Math.floor(parseFloat(numero)));
    alert("Número: " + parseFloat(numero) + " .Número con dos decimales: " + parseFloat(numero).toFixed(2));
    alert("Número: " + parseFloat(numero) + " .Elevado al cubo: " + Math.pow(parseFloat(numero),3));
    if(parseFloat(numero) < 0){
        alert("El número es negativo, no se puede calcular su raiz cuadrada");
    }
    else{
        alert("Número: " + parseFloat(numero) + " .Raiz cuadrada: " + Math.sqrt(parseFloat(numero)));
    }
    numeroAleatorio = Math.floor(Math.random() * 8 + 1);
    alert( numero + " multiplicado con " + numeroAleatorio + " : " + parseFloat(numero) * numeroAleatorio);
}