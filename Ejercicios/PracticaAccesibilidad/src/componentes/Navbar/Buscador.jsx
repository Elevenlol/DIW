import { useState, useEffect } from "react";
const Buscador = () => {
  const [sets, setSets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchSets = async () => {
      const response = await fetch("https://api.scryfall.com/sets");
      const data = await response.json();
      setSets(data.data);
    };

    fetchSets().catch(console.error);
  }, []);

  // Filtrar los sets basados en el término de búsqueda
  const filteredSets = sets.filter((set) =>
    set.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
                  href="#"
                  onClick={() => setSearchTerm(set.name)}
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
