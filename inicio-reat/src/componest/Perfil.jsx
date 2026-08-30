function Perfil({ nombre, rol, lenguajes }) {
  return (
    <div className="tarjeta">
      <h1>{nombre}</h1>
      <p>{rol}</p>
      <ul>
        {lenguajes.map((lenguaje) => (
          <li key={lenguaje}>{lenguaje}</li>
        ))}
      </ul>
    </div>
  );
}

export default Perfil;