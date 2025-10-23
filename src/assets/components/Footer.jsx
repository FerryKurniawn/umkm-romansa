import { MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#F6F5F5]">
      <div className="container mx-auto">
        <div className="md:flex px-10 py-[50px] md:py-[200px] justify-around">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[#98c383] text-2xl">ROMANSA</p>
            <p className="font-light">
              Seruput, Santai, dan Biarkan Matcha Membuat Keajaibannya!
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 md:gap-4">
              <div className="">
                <MapPin className="" />
              </div>
              <div>
                <p>ALAMAT</p>
                <p className="font-light">
                  Jl. Putri Candramidi, halaman Indomaret, Kota Pontianak
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div>
                <Clock />
              </div>
              <div>
                <p>KAMI BUKA!</p>
                <p className="font-light">Sabtu - Kamis</p>
                <p className="font-light">15:00 - 20:00 - Ayo datang</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p>Join the matcha party!</p>

            <a
              href="https://www.instagram.com/matcha_kontainer?igsh=cG92NmZlcnJwaDNl"
              className="flex gap-2 font-light"
            >
              <Instagram />
              @matcha_kontainer
            </a>
          </div>
          <hr className="my-10 md:hidden" />
          <div className="flex justify-center pb-[10px] md:hidden">
            <p className="font-light text-base text-center">
              @2025 ROMANSA. Matcha dengan rasa, cerita yang selalu baru.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <hr className="flex my-14" />
          <div className="flex justify-center pb-[50px]">
            <p className="font-light text-base text-center">
              @2025 ROMANSA. Matcha dengan rasa, cerita yang selalu baru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
