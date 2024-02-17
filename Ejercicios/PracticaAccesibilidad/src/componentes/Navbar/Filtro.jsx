import { useState } from "react";

const FiltroColores = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState("todos");

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    onColorChange(color); // Llamada al prop cuando cambia la selección
  };

  return (
    <div className="filtro-colores">
      <form>
        <label>
          <input
            type="radio"
            value="todos"
            checked={selectedColor === "todos"}
            onChange={handleColorChange}
          />
          Todos
        </label>
        <label>
          <input
            type="radio"
            value="blanco"
            checked={selectedColor === "blanco"}
            onChange={handleColorChange}
          />
          Blanco
        </label>
        <label>
          <input
            type="radio"
            value="azul"
            checked={selectedColor === "azul"}
            onChange={handleColorChange}
          />
          Azul
        </label>
        <label>
          <input
            type="radio"
            value="negro"
            checked={selectedColor === "negro"}
            onChange={handleColorChange}
          />
          Negro
        </label>
        <label>
          <input
            type="radio"
            value="rojo"
            checked={selectedColor === "rojo"}
            onChange={handleColorChange}
          />
          Rojo
        </label>
        <label>
          <input
            type="radio"
            value="verde"
            checked={selectedColor === "verde"}
            onChange={handleColorChange}
          />
          Verde
        </label>
        <label>
          <input
            type="radio"
            value="multicolor"
            checked={selectedColor === "multicolor"}
            onChange={handleColorChange}
          />
          Multicolor
        </label>
        {/* Agrega más colores o categorías según necesites */}
      </form>
    </div>
  );
};

export default FiltroColores;
