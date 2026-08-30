import { useState } from "react";

function ListaCompras() {
  const [items, setItems] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarItem = () => {
    const nombre = texto.trim();
    if (nombre === "") return;
    setItems((prev) => [...prev, { id: Date.now(), nombre, comprado: false }]);
    setTexto("");
  };

  const toggleComprado = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const eliminarItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const faltantes = items.filter((item) => !item.comprado).length;

  return (
    <div className="tarjeta">
      <div className="lista-compras-form">
        <input
          type="text"
          placeholder="Agregar ítem..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarItem()}
        />
        <button type="button" onClick={agregarItem}>Agregar</button>
      </div>

      <ul className="lista-compras">
        {items.map((item) => (
          <li key={item.id}>
            <label style={{ textDecoration: item.comprado ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={item.comprado}
                onChange={() => toggleComprado(item.id)}
              />
              {item.nombre}
            </label>
            <button type="button" onClick={() => eliminarItem(item.id)}>✕</button>
          </li>
        ))}
      </ul>

      <p>Faltan comprar: {faltantes}</p>
    </div>
  );
}

export default ListaCompras;