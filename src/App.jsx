import Nav from "./assets/components/Nav";
import Hero from "./assets/components/Hero";
import Produk from "./assets/components/Produk";
import About from "./assets/components/About";
import Testimonial from "./assets/components/Testimonial";
const App = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Nav />
        <Hero />
        <Produk />
        <About />
        <Testimonial />
      </div>
    </>
  );
};

export default App;
