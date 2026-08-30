function TarjetaPelicula({ titulo, año, vista }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}{vista ? " ✓" : ""}</h3>
      <p>{año}</p>
    </div>
  );
}

export default TarjetaPelicula;