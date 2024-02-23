import { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta"; // Asegúrate de importar correctamente el componente Tarjeta
import { Container, Row, Col, Image } from "react-bootstrap"; // Importando componentes de diseño de React Bootstrap

const Tarjetero = ({ setCode }) => {
  const [cartas, setCartas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchCartas = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.scryfall.com/cards/search?q=set:${setCode}`
        );
        if (!response.ok) {
          throw new Error(
            `Error al buscar cartas para el set ${setCode}: respuesta no válida de la API`
          );
        }
        const data = await response.json();
        setTimeout(() => {
          setCartas(data.data);
          setIsLoading(false);
          setHasSearched(true);
        }, 3000);
      } catch (error) {
        console.error("Error al buscar cartas:", error.message);
        setIsLoading(false);
      }
    };
    if (setCode) {
      fetchCartas();
    }
  }, [setCode]);

  return (
    <Container id="tarjetero">
      {isLoading ? (
        <div className="loading-container">
          <img src="../../src/assets/loading.gif" alt="Cargando..." />
        </div>
      ) : hasSearched ? (
        <Row className="container">
          {cartas.map((carta) => (
            <Col id="colTarjeta" key={carta.id} sm={12} md={6} xl={4}>
              <Tarjeta carta={carta} />
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <section className="container" id="fotoPortada">
            <Image
              className="fotoInicio"
              srcSet="
              ../../src/assets/imagenFondo_cvi1wq_c_scale,w_440.webp 440w,
              ../../src/assets/imagenFondo_cvi1wq_c_scale,w_723.webp 723w,
              ../../src/assets/imagenFondo_cvi1wq_c_scale,w_1037.webp 1037w,
              ../../src/assets/imagenFondo_cvi1wq_c_scale,w_1330.webp 1330w,
              ../../src/assets/imagenFondo_cvi1wq_c_scale,w_1387.webp 1387w"
              src="../../src/assets/imagenFondo_cvi1wq_c_scale,w_1387.webp"
              alt="Imagen de las proximas colaboraciones de Magic"
              fluid
            ></Image>
          </section>
          <section>
            <p id="historico">
              Magic: The Gathering (MTG) es mucho más que un juego de cartas
              coleccionables; es un fenómeno cultural que ha definido y
              transformado el género desde su creación en 1993. Concebido por
              Richard Garfield, un profesor de matemáticas con una pasión por
              los juegos, MTG se lanzó bajo el auspicio de Wizards of the Coast,
              una entonces pequeña editorial de juegos que posteriormente se
              convertiría en una gigante de la industria. Lo que distingue a MTG
              no es solo su complejidad estratégica y la profundidad de su
              universo, sino también su innovador modelo de negocio y la forma
              en que fomenta tanto la colección como la comunidad entre sus
              jugadores.
            </p>
          </section>
        </>
      )}
    </Container>
  );
};

export default Tarjetero;
