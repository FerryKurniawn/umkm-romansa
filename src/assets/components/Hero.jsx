// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="beranda" className="pt-[130px] md:pt-[250px] md:min-h-screen">
      <div className="container mx-auto px-4 md:px-[50px]">
        <div className="flex items-center gap-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex md:items-center font-extralight bg-[#EDF5E9] w-fit p-2 rounded-full mb-10">
              <Sparkles className="w-4 h-4 mr-2" />
              <p>Buatan Anak Bangsa</p>
            </div>
            <h1 className="font-extrabold text-5xl mb-6">
              Rasakan <span className="text-[#98c383] ">Matcha segar</span>,
              Dari Dapur
              <span className="text-[#98c383] "> Kecil Kami</span>
            </h1>
            <p className="text-lg mb-6">
              Kami percaya yang sederhana bisa jadi istimewa. Coba matcha buatan
              UMKM, rasanya beda karena ada cinta di setiap sajian.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://wa.me/6285183172802?text=Halo%20Bang%20Mau%20Pesan",
                  "_blank"
                );
              }}
              className="bg-[#98c383] p-4 rounded- flex gap-3 rounded-full cursor-pointer shadow-lg hover:bg-[#98c383]/85"
            >
              <MessageCircle color="white" />
              <p className="text-white font-bold">Pesan via whatsapp</p>
            </button>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="ROMANSA.webp"
              alt="logo"
              className="rounded-4xl w-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
