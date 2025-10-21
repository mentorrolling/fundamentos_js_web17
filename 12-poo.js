//POO

//molde -> galletas

class Superheroe {
  //para crear objetos -> instancias de la clase
  constructor(nombre, alias, grupo, poder) {
    this.name = nombre;
    this.alias = alias;
    this.group = grupo;
    this.power = poder;
  }

  tarjetaPresentacion() {
    console.log("Tarjeta de presentación");
    console.log("-----------------------");
    console.log(`Nombre: ${this.name}`);
    console.log(`Alias: ${this.alias}`);
    console.log(`Equipo: ${this.group}`);
    console.log(`Poder: ${this.power}`);
  }
}

//Cómo creo una instancia (objeto) de la clase

const super001 = new Superheroe(
  "Bruce Wayne",
  "Batman",
  "Liga de la justicia",
  550
);

const super002 = new Superheroe(
  "Peter Parker",
  "Spiderman",
  "The Avengers",
  800
);

// Ejercicio 1
/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  modificarAlto(valor) {
    this.alto = valor;
  }
  modificarAncho(valor) {
    this.ancho = valor;
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

//Herencia

class Usuario {
  constructor(nombre, correo, area) {
    this.username = nombre;
    this.email = correo;
    this.area = area;
  }

  target() {
    console.log("Presentación");
    console.log(`Nombre de usuario: ${this.username}`);
    console.log(`Correo electrónico: ${this.email}`);
  }
}

class Admin extends Usuario {
  constructor(nombre, correo, area, permisos) {
    super(nombre, correo, area);
    this.permisos = permisos;
  }

  mostrarPermisos() {
    console.log(
      `El usuario ${this.username} tiene los siguientes permisos: ${this.permisos}`
    );
  }
}

/*Escribe un programa que cree una clase "Cuenta" con las siguientes propiedades:
  Una propiedad titular.
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza esta clase para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/
