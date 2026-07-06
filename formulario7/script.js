// ─────────────────────────────────────────
// DATOS — no modificar
// ─────────────────────────────────────────

const peliculas = [
  {
    titulo: "Inception",
    imagen: "https://placehold.co/300x450/12100e/c9a24b?text=Inception",
    genero: "Ciencia Ficción",
    rating: 8.8,
    sinopsis:
      "Un ladrón que roba secretos a través de los sueños recibe la misión inversa: plantar una idea.",
  },
  {
    titulo: "Parasite",
    imagen: "https://placehold.co/300x450/6e1423/f4e8c1?text=Parasite",
    genero: "Drama",
    rating: 8.6,
    sinopsis:
      "Una familia pobre se infiltra poco a poco en la vida de una familia adinerada.",
  },
  {
    titulo: "Mad Max: Fury Road",
    imagen: "https://placehold.co/300x450/c9a24b/12100e?text=Fury+Road",
    genero: "Acción",
    rating: 8.1,
    sinopsis:
      "En un desierto post-apocalíptico, una guerrera ayuda a un grupo de mujeres a escapar de un tirano.",
  },
  {
    titulo: "The Grand Budapest Hotel",
    imagen: "https://placehold.co/300x450/8a3f52/f4e8c1?text=Grand+Budapest",
    genero: "Comedia",
    rating: 8.1,
    sinopsis:
      "Las aventuras de un legendario conserje y su protegido en un hotel europeo entre guerras.",
  },
  {
    titulo: "Hereditary",
    imagen: "https://placehold.co/300x450/1c1a17/6e1423?text=Hereditary",
    genero: "Terror",
    rating: 7.3,
    sinopsis:
      "Tras la muerte de su abuela, una familia descubre secretos oscuros que la persiguen.",
  },
  {
    titulo: "Spider-Man: Into the Spider-Verse",
    imagen: "https://placehold.co/300x450/3b2f6e/f4e8c1?text=Spider-Verse",
    genero: "Animación",
    rating: 8.4,
    sinopsis:
      "Miles Morales descubre un multiverso de arañas y se convierte en el héroe de su propia realidad.",
  },
  {
    titulo: "Se7en",
    imagen: "https://placehold.co/300x450/12100e/8d867a?text=Se7en",
    genero: "Suspenso",
    rating: 8.6,
    sinopsis:
      "Dos detectives persiguen a un asesino que basa sus crímenes en los siete pecados capitales.",
  },
  {
    titulo: "Whiplash",
    imagen: "https://placehold.co/300x450/6e1423/c9a24b?text=Whiplash",
    genero: "Drama",
    rating: 8.5,
    sinopsis:
      "Un joven baterista es empujado al límite por un instructor implacable en un conservatorio de música.",
  },
  {
    titulo: "Everything Everywhere All at Once",
    imagen:
      "https://placehold.co/300x450/c9a24b/1c1a17?text=Everything+Everywhere",
    genero: "Ciencia Ficción",
    rating: 7.8,
    sinopsis:
      "Una mujer descubre que puede acceder a las vidas que hubiera tenido en universos alternativos.",
  },
  {
    titulo: "Knives Out",
    imagen: "https://placehold.co/300x450/1c1a17/f4e8c1?text=Knives+Out",
    genero: "Suspenso",
    rating: 7.9,
    sinopsis:
      "Un detective investiga la muerte de un famoso escritor de novelas policiales rodeado de sospechosos.",
  },
  {
    titulo: "Superbad",
    imagen: "https://placehold.co/300x450/8a3f52/12100e?text=Superbad",
    genero: "Comedia",
    rating: 7.6,
    sinopsis:
      "Dos amigos inseparables intentan comprar alcohol para una fiesta antes de separarse rumbo a la universidad.",
  },
  {
    titulo: "Get Out",
    imagen: "https://placehold.co/300x450/6e1423/12100e?text=Get+Out",
    genero: "Terror",
    rating: 7.7,
    sinopsis:
      "Un joven descubre un oscuro secreto al conocer a la familia de su novia en su casa de campo.",
  },
  {
    titulo: "Coco",
    imagen: "https://placehold.co/300x450/c9a24b/6e1423?text=Coco",
    genero: "Animación",
    rating: 8.4,
    sinopsis:
      "Un niño viaja a la Tierra de los Muertos para descubrir la verdadera historia de su familia.",
  },
  {
    titulo: "John Wick",
    imagen: "https://placehold.co/300x450/12100e/c9a24b?text=John+Wick",
    genero: "Acción",
    rating: 7.4,
    sinopsis:
      "Un ex asesino a sueldo sale de su retiro para vengarse de quienes le arrebataron todo.",
  },
];

// ─────────────────────────────────────────
// FUNCIÓN 1: crearCard
// Recibe un objeto película y devuelve un <div class="card"> con
// imagen, género, título, sinopsis y rating.
// ─────────────────────────────────────────
function crearCard(pelicula) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
    <div class="card-info">
      <span class="genero">${pelicula.genero}</span>
      <h2>${pelicula.titulo}</h2>
      <p>${pelicula.sinopsis}</p>
      <span class="rating">★ ${pelicula.rating}</span>
    </div>
  `;

  return card;
}

// ─────────────────────────────────────────
// FUNCIÓN 2: renderGrilla
// Limpia la grilla, la repinta con las cards de "lista"
// y actualiza el contador.
// ─────────────────────────────────────────
function renderGrilla(lista) {
  const grilla = document.querySelector("#grilla");
  const contador = document.querySelector("#contador");

  grilla.innerHTML = "";

  lista.forEach(function (pelicula) {
    const card = crearCard(pelicula);
    grilla.appendChild(card);
  });

  contador.textContent = lista.length + " películas encontradas";
}

// ─────────────────────────────────────────
// FUNCIÓN 3: buscar
// Devuelve un nuevo array filtrado por título, sin importar mayúsculas.
// ─────────────────────────────────────────
function buscar(lista, termino) {
  return lista.filter(function (pelicula) {
    return pelicula.titulo.toLowerCase().includes(termino.toLowerCase());
  });
}

// ─────────────────────────────────────────
// FUNCIÓN 4: filtrarPorGenero
// Si genero === "", devuelve la lista completa.
// Si hay género, devuelve solo las que coinciden.
// ─────────────────────────────────────────
function filtrarPorGenero(lista, genero) {
  if (genero === "") return lista;

  return lista.filter(function (pelicula) {
    return pelicula.genero === genero;
  });
}

// ─────────────────────────────────────────
// FUNCIÓN 5: buscarYFiltrar
// Lee input#busqueda y select#genero, aplica buscar() y
// filtrarPorGenero() en cadena, y renderiza el resultado.
// ─────────────────────────────────────────
function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  let resultado = buscar(peliculas, termino);
  resultado = filtrarPorGenero(resultado, genero);

  renderGrilla(resultado);
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

// Render inicial — muestra todas las películas al abrir la página
renderGrilla(peliculas);
