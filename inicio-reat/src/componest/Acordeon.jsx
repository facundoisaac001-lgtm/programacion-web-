import { useState } from "react";

function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="tarjeta">
      <button
        type="button"
        className="acordeon-titulo"
        onClick={() => setAbierto((a) => !a)}
      >
        {titulo} {abierto ? "▲" : "▼"}
      </button>
      {abierto && <p>{contenido}</p>}
    </div>
  );
}

export default Acordeon;