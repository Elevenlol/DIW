import { useState } from "react";

import "./Estilos/estilos.scss";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
      <Home></Home>
    </>
  );
}

export default App;
