import { Leaf, MessageCircle } from "lucide-react";

const Produk = () => {
  const produkMenu = [
    { id: 1, name: "Matcha Latte", image: "matcha-latte.jpg", price: 15_000 },
    { id: 2, name: "Matcha Coklat", image: "macho.jpg", price: 18_000 },
    { id: 3, name: "Matcha Pisang", image: "chasang.jpg", price: 20_000 },
  ];
  const ProductCard = ({ name, price, image }) => {
    return (
      <>
        <div className="p-2.5 m-2.5 w-[80%] flex mx-auto flex-col shadow-lg bg-white">
          <div className="flex justify-center">
            <img
              src={image}
              alt={image.toLocaleString()}
              className="w-full rounded-2xl h-[400px]"
            />
          </div>
          <div className="pl-4 ">
            <h1 className="text-xl font-bold mt-6">{name}</h1>
            <p>Harga: Rp.{price.toLocaleString()} </p>
            <div className="flex gap-2 bg-[#98c383] w-fit items-center mx-auto p-3 my-6 rounded-full">
              <MessageCircle color="white" />
              <p className="text-white">Pesan Sekarang</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section id="produk" className="md:min-h-screen scroll-mt-[200px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mt-10">
            <div className="flex gap-2 items-center text-center mb-4">
              <h1 className="font-bold text-2xl">Menu Kami</h1>
              <Leaf color="#98c383" />
            </div>
            <p className="text-center max-w-[85%]">
              Matcha fresh, dibuat langsung hari ini. Tinggal pilih vibes kamu:
              creamy, manis, atau yang segerrr banget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {produkMenu.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produk;
