import Nav from "./assets/components/Nav";
import Hero from "./assets/components/Hero";
import Produk from "./assets/components/Produk";
const App = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Nav />
        <Hero />
        <Produk />
      </div>
    </>
  );
};

export default App;
