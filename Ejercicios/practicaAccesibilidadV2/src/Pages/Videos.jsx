import Footer from "../Components/Footer";

function Videos() {
  return (
    <>
      <h1>Videos sobre como jugar a Magic the Gathering</h1>
      <main className="videos">
        <section className="seccionVideo" id="uno">
          <video controls poster="../../src/assets/mini1.webp">
            <source
              src="../../src/assets/Video_Jugar_MTG.mp4"
              type="video/mp4"
            />
            <track
              kind="subtitles"
              src="../../src/assets/Español.vtt"
              lang="es"
              label="Español"
              default
            />
            <track
              kind="subtitles"
              src="../../src/assets/Ingles.vtt"
              lang="en"
              label="Inglés"
            />
            <img src="" alt="Video no soportado" />
          </video>
          <p className="descripcion" id="dos">
            Magic: The Gathering (MTG) es un juego de cartas coleccionables que
            combina estrategia, conocimiento táctico y la habilidad de construir
            mazos personalizados para competir contra otros jugadores. Cada
            jugador comienza con un mazo de al menos 60 cartas, diseñado
            previamente, que representa un arsenal de criaturas, hechizos,
            artefactos y terrenos. El objetivo del juego es reducir los puntos
            de vida de tu oponente de 20 a 0 utilizando una combinación de
            ataques con criaturas, hechizos directos y estrategias específicas.
            Los jugadores se turnan para jugar cartas de su mano, pagando el
            coste de maná necesario al aprovechar los terrenos para generar este
            recurso. La diversidad de cartas permite a los jugadores explorar
            innumerables estrategias y sinergias, haciendo de cada partida una
            experiencia única y desafiante.
          </p>
        </section>
        <section className="seccionVideo" id="tres">
          <p className="descripcion" id="cuatro">
            Al avanzar en Magic: The Gathering, los jugadores aprenden a
            desarrollar estrategias complejas y a adaptarse a los movimientos de
            sus oponentes. La construcción del mazo es fundamental: cada color
            de maná representa diferentes estilos de juego y tipos de magia. Por
            ejemplo, los mazos azules se centran en el control y la
            manipulación, mientras que los rojos prefieren la agresión rápida y
            los daños directos. Además de elegir los colores de su mazo, los
            jugadores deben considerar el equilibrio entre criaturas, hechizos y
            terrenos, asegurándose de tener recursos suficientes para ejecutar
            su estrategia. La interacción entre jugadores durante el juego es
            crucial; saber cuándo atacar, defender, lanzar hechizos y, lo más
            importante, cuándo mantener recursos para acciones futuras, puede
            determinar el resultado de la partida. Con cada nueva expansión de
            cartas, MTG ofrece a los jugadores la oportunidad de explorar nuevas
            tácticas y enfrentarse a desafíos renovados.
          </p>
          <video controls poster="../../src/assets/mini2.webp">
            <source
              src="../../src/assets/Video_Jugar_MTG2.mp4"
              type="video/mp4"
            />
            <track
              kind="subtitles"
              src="../../src/assets/Español.vtt"
              lang="es"
              label="Español"
              default
            />
            <track
              kind="subtitles"
              src="../../src/assets/Ingles.vtt"
              lang="en"
              label="Inglés"
            />
            <img src="" alt="Video no soportado" />
          </video>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Videos;
