// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-8">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-[#66a745] font-bold text-2xl" href="/">
          ROMANSA
        </a>

        <div className="hidden md:block">
          <ul className="flex md:gap-6 items-center ">
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <a href="#beranda" className="hover:text-[#98C383]">
                Beranda
              </a>
            </motion.li>
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <a href="#produk" className="hover:text-[#98C383]">
                Produk
              </a>
            </motion.li>
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <a href="#tentang" className="hover:text-[#98C383]">
                Tentang ROMANSA
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
