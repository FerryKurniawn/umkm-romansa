// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Leaf, MessageCircle } from "lucide-react";

const Produk = () => {
  const produkMenu = [
    {
      id: 1,
      name: "Matcha Latte",
      image: "matcha-latte.webp",
      price: 15_000,
      description:
        "Matcha Latte itu enak banget, deh! Rasanya lembut, ada sentuhan pahit dari matcha yang dikombinasikan dengan susu yang creamy. Cocok buat kamu yang suka minuman tenang, pas banget buat ngopi santai pagi atau sore.",
    },
    {
      id: 2,
      name: "Matcha Coklat",
      image: "macho.webp",
      price: 18_000,
      description:
        "Kalau kamu suka matcha dan coklat, kamu bakal suka banget yang satu ini! Matcha yang sedikit pahit ketemu dengan manisnya coklat, jadi rasanya balance banget. Nikmat banget buat yang pengen coba sesuatu yang beda dari biasanya.",
    },
    {
      id: 3,
      name: "Matcha Pisang",
      image: "chasang.webp",
      price: 20_000,
      description:
        "Matcha ketemu pisang yang manis dan lembut. Rasanya fresh dan sehat, cocok banget buat kamu yang cari camilan yang nggak cuma enak, tapi juga nggak bikin bersalah.",
    },
  ];
  const ProductCard = ({ name, price, image, description }) => {
    console.log(image.toLocaleString());
    return (
      <>
        <div className="p-2.5 m-2.5 flex mx-auto flex-col shadow-lg bg-white w-[80%] md:w-full">
          <div className="flex justify-center">
            <motion.img
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              src={image}
              alt={image.toLocaleString()}
              className="w-full rounded-2xl"
            />
          </div>
          <div className="pl-4 flex flex-col justify-between gap-10">
            <h1 className="text-2xl font-bold mt-6">{name}</h1>
            <p className="text-base font-light max-h-[100px] mb-10">
              {description}
            </p>
            <p className="font-medium text-lg">
              Harga: Rp.{price.toLocaleString()}{" "}
            </p>
            <div
              onClick={() => {
                window.open(
                  `https://wa.me/6285183172802?text=Halo%20Bang%20Mau%20Pesan%20${name}`,
                  "_blank"
                );
              }}
              className="flex gap-2 bg-[#98c383] w-fit items-center shadow-lg mx-auto p-3 my-6 rounded-full cursor-pointer hover:bg-[#98c383]/90"
            >
              <MessageCircle
                color="
              white"
              />
              <p className="text-white">Pesan Sekarang</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section id="produk" className="md:min-h-screen bg-[#FAFBFA]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center py-32">
            <div className="flex gap-2 items-center text-center mb-4">
              <h1 className="font-bold text-2xl md:text-4xl">Menu Kami</h1>
              <Leaf color="#98c383" />
            </div>
            <p className="text-center max-w-[85%] mb-10">
              Matcha fresh, dibuat langsung hari ini. Tinggal pilih vibes kamu:
              creamy, manis, atau yang segerrr banget.
            </p>
            <div className="grid grid-cols-1 w-full md:grid-cols-3 md:max-w-[75%] gap-8 ">
              {produkMenu.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  description={item.description}
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
