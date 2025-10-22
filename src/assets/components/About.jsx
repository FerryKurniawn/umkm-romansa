import { Leaf, HeartIcon } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="tentang" className=" my-25 scroll-mt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-6 my-6">
              <div className="bg-[#f5faf3] p-3 rounded-4xl">
                <Leaf color="green" />
              </div>
              <div className="bg-[#F7F5F4] p-3 rounded-4xl">
                <HeartIcon color="pink" />
              </div>
            </div>
            <h1 className="font-bold mb-6 text-2xl md:text-4xl">
              Tentang ROMANSA
            </h1>
            <p className="items-center text-center text-base md:text-lg w-[85%] font-light md:w-[70%]">
              ROMANSA adalah usaha minuman kekinian yang mengusung matcha
              sebagai bahan utama. Berlokasi di Jl. Putri Candramidi, tepatnya
              di halaman Indomaret, Kota Pontianak, ROMANSA hadir dengan konsep
              unik berupa gerai di kontainer yang memberikan suasana santai
              dengan harga yang lebih terjangkau dibandingkan kafe-kafe pada
              umumnya. Usaha ini didirikan oleh seorang mahasiswa Manajemen dari
              IAIN Pontianak, yang memiliki kecintaan terhadap matcha dan ingin
              memperkenalkan berbagai varian rasa matcha kepada masyarakat.
              Produk andalannya antara lain Matcha Latte, Macho (perpaduan
              Matcha dan Coklat), serta Chasang (kombinasi Matcha dan Pisang).
              Melalui promosi di media sosial seperti Instagram, ROMANSA
              berusaha membangun brand yang edukatif, menarik, dan lebih dekat
              dengan kalangan muda Pontianak.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
