import React from "react";
import { Col, Row } from "react-bootstrap";
import Tarjeta from "./Tarjeta";

function Tarjetero() {
  const tarjetas = [
    {
      srcset:
        "../../src/assets/foto_cw2dmd_c_scale,w_480.webp 480w,../../src/assets/foto_cw2dmd_c_scale,w_657.webp 657w,../../src/assets/foto_cw2dmd_c_scale,w_794.webp 794w,../../src/assets/foto_cw2dmd_c_scale,w_962.webp 962w,../../src/assets/foto_cw2dmd_c_scale,w_1018.webp 1018w,../../src/assets/foto_cw2dmd_c_scale,w_1024.webp 1024w",
      src: "",
      alt: "Imagen de la pelicula",
      name: "Kimi no na wa",
    },
    {
      srcset:
        "../../src/assets/foto_cw2dmd_c_scale,w_480.webp 480w,../../src/assets/foto_cw2dmd_c_scale,w_657.webp 657w,../../src/assets/foto_cw2dmd_c_scale,w_794.webp 794w,../../src/assets/foto_cw2dmd_c_scale,w_962.webp 962w,../../src/assets/foto_cw2dmd_c_scale,w_1018.webp 1018w,../../src/assets/foto_cw2dmd_c_scale,w_1024.webp 1024w",
      src: "",
      alt: "Imagen de la pelicula",
      name: "Shigatsu wa kimi no uso",
    },
    {
      srcset:
        "../../src/assets/foto_cw2dmd_c_scale,w_480.webp 480w,../../src/assets/foto_cw2dmd_c_scale,w_657.webp 657w,../../src/assets/foto_cw2dmd_c_scale,w_794.webp 794w,../../src/assets/foto_cw2dmd_c_scale,w_962.webp 962w,../../src/assets/foto_cw2dmd_c_scale,w_1018.webp 1018w,../../src/assets/foto_cw2dmd_c_scale,w_1024.webp 1024w",
      src: "",
      alt: "Imagen de la pelicula",
      name: "Sword art online",
    },
    {
      srcset:
        "../../src/assets/foto_cw2dmd_c_scale,w_480.webp 480w,../../src/assets/foto_cw2dmd_c_scale,w_657.webp 657w,../../src/assets/foto_cw2dmd_c_scale,w_794.webp 794w,../../src/assets/foto_cw2dmd_c_scale,w_962.webp 962w,../../src/assets/foto_cw2dmd_c_scale,w_1018.webp 1018w,../../src/assets/foto_cw2dmd_c_scale,w_1024.webp 1024w",
      src: "",
      alt: "Imagen de la pelicula",
      name: "Popeye",
    },
  ];
  return (
    <>
      <Row>
        {tarjetas.map((tarjeta) => (
          <Col key={tarjeta.name} sm={12} md={6} lg={3}>
            <Tarjeta
              srcset={tarjeta.srcset}
              src={tarjeta.src}
              alt={tarjeta.alt}
              name={tarjeta.name}
            ></Tarjeta>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Tarjetero;
