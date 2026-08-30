import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Persona from "./componest/Persona";
import TarjetaPelicula from "./componest/TarjetaPelicula";
import Perfil from "./componest/Perfil";
import Contador from "./componest/Contador";
import Acordeon from "./componest/Acordeon";
import Buscador from "./componest/Buscador";
import ListaCompras from "./componest/ListaCompras";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Persona nombre="facundo" apellido="torres" />

      <Perfil
        nombre="Ana"
        rol="Desarrolladora"
        lenguajes={["JavaScript", "React", "CSS"]}
      />

      <Contador />

      <Acordeon
        titulo="¿Qué es React?"
        contenido="React es una librería de JS para construir interfaces."
      />

      <Buscador />

      <ListaCompras />

      {peliculas.map((p) => (
        <TarjetaPelicula
          key={p.id}
          titulo={p.titulo}
          año={p.año}
          vista={p.vista}
        />
      ))}

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;