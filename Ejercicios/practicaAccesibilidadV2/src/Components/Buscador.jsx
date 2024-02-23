import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Buscador = ({ onSetSelected }) => {
  const [sets, setSets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch("https://api.scryfall.com/sets");
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la API");
        }
        const data = await response.json();
        setSets(data.data);
      } catch (error) {
        console.error("Error al acceder a la API:", error.message);
      }
    };
    fetchSets();
  }, []);

  // Nos permite realizar busquedas a tiempo real sobre los sets
  const filteredSets = sets.filter((set) =>
    set.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Controlador para la consulta a la hora de seleccionar el set
  const handleSetClick = (set) => {
    setSearchTerm(set.name);
    onSetSelected(set.code);
    navigate("/");
  };
  return (
    <>
      <div className="search-container" style={{ position: "relative" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar sets..."
          id="campoBusqueda"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
        {showDropdown && searchTerm && (
          <div
            className="dropdown-menu show"
            style={{ position: "absolute", width: "100%" }}
          >
            {filteredSets.length > 0 ? (
              filteredSets.map((set) => (
                <a
                  key={set.code}
                  className="dropdown-item"
                  onClick={() => handleSetClick(set)}
                >
                  {set.name}
                </a>
              ))
            ) : (
              <span className="dropdown-item">No se encontraron sets</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Buscador;
