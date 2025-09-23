/*
Entrada: edad(string)
Algoritmo: Se tomo el dato ingresado, si el dato ingresado es mayor o igual a 18, se debe mostrar
el mensaje "Usted puede ingresar", pero si es menor de 18 tiene que mostrar
el mensaje "Usted es menor de edad. Debe ser acompañado por un adulto".
Salida: mensaje(string)

*/
let edad = prompt("Ingrese la edad: ","");
if(isNaN(edad) == true || typeof(edad) == 'object' || edad.trim().length == 0){
    alert("No se ingreso un número.");
}
else if( 0 < Number(edad) && Number(edad) <= 99 && edad.indexOf('.') == -1){
    if( Number(edad) >= 18){
        alert("Usted es mayor de edad, puede ingresar.");
    }
    else{
        alert("Usted es menor de edad. Debe ser acompañado por un adulto.");
    }
}
else{
    alert("La edad ingresada no es viable.");
}