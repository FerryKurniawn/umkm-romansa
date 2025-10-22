import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="beranda" className="pt-[130px] md:pt-[250px] md:min-h-screen">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center">
          <div>
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
            <button className="bg-[#98c383] p-4 rounded- flex gap-3 rounded-full">
              <MessageCircle color="white" />
              <p className="text-white font-bold">Pesan via whatsapp</p>
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="matcha-latte.jpg"
              alt="matcha-latte"
              className="rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
