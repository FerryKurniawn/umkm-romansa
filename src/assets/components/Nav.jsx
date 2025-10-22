import { MessageCircle } from "lucide-react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-[#66a745] font-bold text-2xl">ROMANSA</h1>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex md:gap-6 items-center ">
            <li>
              <a href="#beranda" className="hover:text-[#98C383]">
                Beranda
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-[#98C383]">
                Produk
              </a>
            </li>
            <li>
              <a href="#tentang" className="hover:text-[#98C383]">
                Tentang ROMANSA
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6283151251122?text=halo%20dek"
                target="_blank"
                className="flex gap-2 bg-[#98C383] p-4 rounded-full"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.03 2 11C2 13.08 2.74 15.04 4.07 16.59L3.2 20.3C3.07 20.86 3.63 21.34 4.15 21.08L7.5 19.5C8.8 20.14 10.35 20.5 12 20.5C17.52 20.5 22 16.47 22 11.5C22 6.53 17.52 2 12 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <p className="text-white font-bold">Pesan via whatsapp</p>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <a
          href="#"
          className="gap-2 bg-[#98C383] p-2 rounded-full block md:hidden"
        >
          <MessageCircle color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
