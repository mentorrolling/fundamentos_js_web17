let apellido = prompt("Ingrese un apellido: ","");
if (apellido.length == 0) {
    alert("Dato incorreto");
}
else{
    alert("Cantidad de caracteres: " + apellido.length + " .Ultima letra del apellido: " + apellido[apellido.length-1]);
}