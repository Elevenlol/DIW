import Tarjetero from "../Components/Tarjetero";
import Footer from "../Components/Footer";

function Home({ selectedSet }) {
  return (
    <>
      <header>
        <h1> Buscador de cartas por set de cartas de Magic the gathering</h1>
      </header>
      <main className="home container">
        <section className="container">
          <Tarjetero setCode={selectedSet}></Tarjetero>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
