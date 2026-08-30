import { useState } from "react";

function Contador() {
  const [conteo, setConteo] = useState(0);

  const sumar = () => setConteo((c) => c + 1);
  const restar = () => setConteo((c) => (c > 0 ? c - 1 : 0));
  const reiniciar = () => setConteo(0);

  return (
    <div className="tarjeta">
      <p>Conteo: {conteo}</p>
      <button type="button" onClick={sumar}>Sumar</button>
      <button type="button" onClick={restar}>Restar</button>
      <button type="button" onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;