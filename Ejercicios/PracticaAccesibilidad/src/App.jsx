//import { useState } from 'react'
import Navbar from "./componentes/Navbar/Navbar";
import { useState } from "react";
import CartasDrawer from "./componentes/Cards/CartasDrawer";
import FiltroBoton from "./componentes/Navbar/BotonFiltrado";

const App = () => {
  const [cartasFiltradas, setCartasFiltradas] = useState([]);
  // Suponiendo que tienes un estado para el set y color seleccionado
  const [selectedSet, setSelectedSet] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const filtrarCartas = async () => {
    if (!selectedSet) {
      // Si no hay un set seleccionado, podrías optar por no hacer nada o mostrar todas las cartas
      return;
    }

    // Aquí implementarías la llamada a la API o el filtrado de las cartas basado en selectedSet
    // Por ejemplo:
    const response = await fetch(
      `https://api.scryfall.com/cards/search?order=set&q=e%3A${selectedSet}&unique=prints`
    );
    const data = await response.json();
    setCartasFiltradas(data.data); // Asume que la respuesta tiene un array de cartas en 'data.data'
  };
  return (
    <>
      {/* Asume que Navbar puede recibir y pasar correctamente las props a Buscador y FiltroColores */}
      <Navbar
        selectedSet={selectedSet}
        setSelectedSet={setSelectedSet}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      >
        <FiltroBoton onFiltrar={filtrarCartas} />
      </Navbar>
      <CartasDrawer cartas={cartasFiltradas} />
    </>
  );
};

export default App;
