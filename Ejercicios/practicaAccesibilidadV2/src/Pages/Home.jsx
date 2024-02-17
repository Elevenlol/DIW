import React from "react";
import { Container, Image } from "react-bootstrap";
import Tarjetero from "../Components/Tarjetero";
function Home() {
  return (
    <>
      <main>
        <Container>
          <Image
            sizes="(max-width: 1024px) 100vw, 1024px"
            srcSet="
        ../../src/assets/foto_cw2dmd_c_scale,w_480.webp 480w,
        ../../src/assets/foto_cw2dmd_c_scale,w_657.webp 657w,
        ../../src/assets/foto_cw2dmd_c_scale,w_794.webp 794w,
        ../../src/assets/foto_cw2dmd_c_scale,w_962.webp 962w,
        ../../src/assets/foto_cw2dmd_c_scale,w_1018.webp 1018w,
        ../../src/assets/foto_cw2dmd_c_scale,w_1024.webp 1024w"
            src="../../src/assets/foto_cw2dmd_c_scale,w_1024.webp"
            alt=""
            fluid
          />
        </Container>
      </main>
      <section className="container m-2">
        <header>
          <h1></h1>
          <h2></h2>
        </header>
        <p></p>
      </section>
      <section className="container m-3">
        <Tarjetero></Tarjetero>
      </section>
    </>
  );
}

export default Home;
