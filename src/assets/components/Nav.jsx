const Nav = () => {
  return (
    <>
      <nav className="flex bg-white shadow-lg fixed w-screen p-10 md:justify-around justify-between items-center">
        <div>
          <h1 className="text-[#66a745] font-bold text-2xl ">ROMANSA</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex md:gap-6 items-center ">
            <li>
              <a href="" className="hover:text-[#98C383]">
                Beranda
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#98C383]">
                Produk
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#98C383]">
                Tentang ROMANSA
              </a>
            </li>
            <li>
              <a href="" className="flex gap-2 bg-[#98C383] p-4 rounded-full">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.03 2 11C2 13.08 2.74 15.04 4.07 16.59L3.2 20.3C3.07 20.86 3.63 21.34 4.15 21.08L7.5 19.5C8.8 20.14 10.35 20.5 12 20.5C17.52 20.5 22 16.47 22 11.5C22 6.53 17.52 2 12 2Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>

                <p className="text-white font-bold">Order via whatsapp</p>
              </a>
            </li>
          </ul>
        </div>
        <a
          href=""
          className="gap-2 bg-[#98C383] p-2 rounded-full block md:hidden"
        >
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.03 2 11C2 13.08 2.74 15.04 4.07 16.59L3.2 20.3C3.07 20.86 3.63 21.34 4.15 21.08L7.5 19.5C8.8 20.14 10.35 20.5 12 20.5C17.52 20.5 22 16.47 22 11.5C22 6.53 17.52 2 12 2Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </a>
      </nav>
    </>
  );
};

export default Nav;
