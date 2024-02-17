const FiltroBoton = ({ onFiltrar }) => {
  return (
    <button className="btn btn-primary" onClick={onFiltrar}>
      Filtrar Cartas
    </button>
  );
};

export default FiltroBoton;
