import { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import DetalleCartaModal from "./DetalleCartaModal";

function Tarjeta({ carta }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="tarjeta">
        <Image
          className="card-img-top"
          src="../../src/assets/backCard.webp"
          srcSet={carta.image_uris?.normal}
          alt={`Carta de Magic de: ${carta.name}`}
          fluid
        />
        <Card.Body>
          <Card.Title>{carta.name}</Card.Title>
          <Card.Text>
            Edición: {carta.set}
            <br />
            Número: {carta.collector_number}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Ver Más
          </Button>
        </Card.Body>
      </Card>

      <DetalleCartaModal show={showModal} onHide={handleClose} carta={carta} />
    </>
  );
}

export default Tarjeta;
