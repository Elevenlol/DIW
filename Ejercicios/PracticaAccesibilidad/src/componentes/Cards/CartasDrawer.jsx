
const CartasDrawer = ({ cartas }) => {
  return (
    <div className="cartas-drawer">
      {cartas.length > 0 ? (
        cartas.map((carta, index) => (
          <div key={index} className="carta">
            {/* Renderiza los detalles de la carta como prefieras */}
            <p>{carta.name}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron cartas.</p>
      )}
    </div>
  );
};

export default CartasDrawer;