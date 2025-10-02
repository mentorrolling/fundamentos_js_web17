//Callback
//Funciones que se pasan como parámetros de otras funciones

function saludar(nombre = prompt("Cuál es tu nombre?")) {
  console.log(`Hola ${nombre}!!😎`);
}

function entradaUsuario(callback) {
  let usuario = prompt("Cuál es tu nombre?");
  callback(usuario);
}

//setTimeout(callback, 2000)
// setTimeout(saludar, 2000);

//------------------------------

function prepararPedido(pedido, callback) {
  console.log(`Preparando tu pedido de ${pedido}...`);
  setTimeout(callback, 3000);
}

const notificarEntrega = function () {
  console.log("Tu pedido está listo para entregar!!");
};

//Métodos avanzados de los arrays

let numbers = [234, 23, 56, 443, 65, 9000, 123];

const numbersOrder = () => numbers.slice().sort((a, b) => a - b);

//métodos de búsqueda y filtrados
const productosTecnologia = [
  "Laptop Dell XPS 13",
  "Laptop MacBook Air M2",
  "Laptop Lenovo ThinkPad X1",
  "Laptop HP Spectre x360",
  "Laptop Asus ZenBook 14",
  "Tablet iPad Air",
  "Tablet Samsung Galaxy Tab S9",
  "Tablet Lenovo Tab P11",
  "Webcam Logitech C920",
  "Webcam Logitech C920",
  "Webcam Microsoft LifeCam HD-3000",
  "Smartphone Samsung Galaxy S23",
  "Auriculares Sony WH-1000XM5",
  "Smartwatch Apple Watch Series 9",
  'Monitor LG UltraWide 34"',
  "Teclado mecánico Logitech G Pro",
  "Mouse inalámbrico MX Master 3S",
  "Cámara Canon EOS R10",
  "Router TP-Link AX6000",
  "Consola PlayStation 5",
  "Drone DJI Mini 3 Pro",
];

console.log(productosTecnologia.find((cosita) => cosita.includes("Tablet")));

let webcamEncontradas = productosTecnologia.filter((produc) =>
  produc.includes("Nintendo")
);

function buscarProductos(producto = prompt("Ingrese nombre de producto")) {
  let productosEncontrados = productosTecnologia.filter((produc) =>
    produc.includes(producto)
  );

  if (productosEncontrados.length === 0) {
    console.log(`No se encotraron productos con la palabra ${producto} 😭`);
  } else {
    console.log(productosEncontrados);
  }
}
