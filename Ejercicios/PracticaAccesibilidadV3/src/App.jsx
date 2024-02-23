import { useState } from "react";
import "./Estilos/estilos.scss";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Videos from "./Pages/Videos";
import Error from "./Pages/Error";
function App() {
  const [selectedSet, setSelectedSet] = useState("");

  return (
    <BrowserRouter>
      <Menu onSetSelected={setSelectedSet} />
      <Routes>
        <Route path="/" element={<Home selectedSet={selectedSet} />}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
