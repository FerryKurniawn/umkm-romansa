import Nav from "./assets/components/Nav";
import Hero from "./assets/components/Hero";
import Produk from "./assets/components/Produk";
import About from "./assets/components/About";
const App = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Nav />
        <Hero />
        <Produk />
        <About />
      </div>
    </>
  );
};

export default App;
