let cuerpoTabla = document.querySelector("tbody");
let inputNombre = document.querySelector("#name");
let inputAutor = document.querySelector("#author");
let inputAnio = document.querySelector("#year");
let inputDescripcion = document.querySelector("#description");

//Array de objetos
const listaLibros = [
  {
    id: 1,
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    descripcion:
      "La saga de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, una obra maestra del realismo mágico.",
  },
  {
    id: 2,
    nombre: "1984",
    autor: "George Orwell",
    anio: 1949,
    descripcion:
      "Una novela distópica que presenta un futuro totalitario bajo la vigilancia del 'Gran Hermano' y la manipulación constante de la verdad.",
  },
  {
    id: 3,
    nombre: "Un Mundo Feliz (Brave New World)",
    autor: "Aldous Huxley",
    anio: 1932,
    descripcion:
      "Una crítica social sobre una sociedad futurista que alcanza la estabilidad a través de la ingeniería genética y el condicionamiento psicológico.",
  },
  {
    id: 4,
    nombre: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    descripcion:
      "Considerada la primera novela moderna, narra las aventuras de un hidalgo que enloquece al leer libros de caballería y decide convertirse en caballero andante.",
  },
  {
    id: 5,
    nombre: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    descripcion:
      "Un cuento poético y filosófico que explora temas de soledad, amistad, amor y pérdida a través de la historia de un pequeño príncipe que viaja por el universo.",
  },
];

getLibros();

function getLibros() {
  cuerpoTabla.innerHTML = "";

  listaLibros.forEach((libro) => {
    let fila = document.createElement("tr");
    let celdas = `<td>${libro.nombre}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>`;
    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
}

const agregarLibro = () => {
  let id = listaLibros.at(-1).id + 1;

  const datos = {
    id,
    nombre: inputNombre.value,
    autor: inputAutor.value,
    anio: inputAnio.value,
    descripcion: inputDescripcion.value,
  };

  listaLibros.push(datos);
};

document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  agregarLibro();
  getLibros();
});
