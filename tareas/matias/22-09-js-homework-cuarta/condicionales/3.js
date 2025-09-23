//un comerciante hace descuentos a sus clientes de la siguiente forma:
//si ha comprado menos de 100 euros no hay descuento
//si la compra esta entre 100 y 300 euros le descuenta un 5%
//Sila compra esta por encima de 300 hasta 500 euros le descuenta un 10%
//si la compra supera los 500 euros le descuenta un 15%
//ALGORITMO
//-------------
//-Datos de entrada:monto de la compra
//-Proceso:tomo el monto que ingresa el usuario, comparamos con los valores que pondrian tener descuenro, si coincide con alguno hago el calculo del descuento, sino dejo el monto como estaba, mostrar el monto con o sin descuento.
//-Salida:monto final y mensaje diciendo el descuento

let compra = Number(prompt("Ingrese el monto de la compra en euros: "));
let descuento = 0;

if (compra < 100) {
  descuento = 0;
} else if (compra >= 100 && compra <= 300) {
  descuento = 0.05;
} else if (compra > 300 && compra <= 500) {
  descuento = 0.1;
} else if (compra > 500) {
  descuento = 0.15;
}

let total = compra - (compra * descuento);

alert(`El descuento aplicado es del ${descuento * 100}%, El total a pagar es: €${total.toFixed(2)}`);
