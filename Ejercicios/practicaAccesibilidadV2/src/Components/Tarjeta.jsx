import React from "react";
import Card from "react-bootstrap/Card";

function Tarjeta(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        srcSet={props.srcset}
        scr={props.src}
        alt={props.alt}
      />
      <Card.Body>
        <Card.Title title={props.name}>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default Tarjeta;
