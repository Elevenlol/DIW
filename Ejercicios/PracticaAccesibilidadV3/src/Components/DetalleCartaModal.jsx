import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const DetalleCartaModal = ({ show, onHide, carta }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{carta.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Edición: {carta.set}</p>
        <p>Número: {carta.collector_number}</p>
        <Image src={carta.image_uris?.normal} fluid />
        {/* Añade más información según necesites */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetalleCartaModal;
