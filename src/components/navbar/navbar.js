import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Icetite from "./../../../public/icons/icetite.png";
import Bolt from "./../../../public/icons/bolt.svg";
import Vit from "./../../../public/icons/vit.png";
import DownArrow from "./../../../public/icons/downarrow.svg";
import Ieeenav from "./../../../public/icons/ieeemadras.png";

function Navbar(){
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });

  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
  };

  const handleMouseLeave = () => {
    setDropdownTimeout(
      setTimeout(() => {
        setShowDropdown(false);
      }, 500)
    );
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: "-20px", transitionEnd: { display: "none" } },
  };

  const arrowVariants = {
    open: { rotate: 0, transition: { duration: 0.5 } },
    closed: { rotate: 180, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  const renderMobileMenu = () => (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          className="fixed top-0 left-0 h-full w-5/6 bg-[#111042] text-white p-5 overflow-auto z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute right-5 top-5 text-white text-xl bg-transparent border-none outline-none"
          >
            &#10005;
          </button>
          <div className="flex flex-col space-y-4 pt-20">
            <a href="/" className="text-xl text-white hover:text-gray-300">
              Home
            </a>
            <a href="/bolt" className="text-xl text-white hover:text-gray-300">
              Bolt
            </a>
            <a
                href="/registrations"
                className="text-xl text-white hover:text-gray-300"
            >
              Registrations
            </a>
            <a
                href="/speakers"
                className="text-xl text-white hover:text-gray-300"
            >
              Speakers
            </a>
            <a
                href="/committee"
                className="text-xl text-white hover:text-gray-300"
            >
              Committee
            </a>
            <a
              href="/sponsorship"
              className="text-xl text-white hover:text-gray-300"
            >
              Sponsorship
            </a>
            <a
                href="/authors"
                className="text-xl text-white hover:text-gray-300"
            >
              Authors
            </a>
            <a
                href="/icetite20"
                className="text-xl text-white hover:text-gray-300"
            >
              Ic'ETITE-20
            </a>
            <a
                href="/visa"
                className="text-xl text-white hover:text-gray-300"
            >
              VISA
            </a>

            <a
                href="/contact"
                className="text-xl text-white hover:text-gray-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="px-20 bg-[#111042] text-white py-2 flex flex-row items-center text-xl justify-between z-50">
      <div className="flex flex-row space-x-5">
        <a href="/">
        <Image src={Icetite} alt="" className=" w-52 -translate-x-10" />
        </a>
        {!isTabletOrMobile && (
            <>
              <a href="/bolt">
                <Image src={Bolt} alt="" className="h-20 w-auto -translate-x-10" />
              </a>
            </>
        )}
      </div>
      {isMobile ? (
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>☰</button>
      ) : (
        <div className="flex flex-row items-center justify-center space-x-10 text-lg md:text-xl">

          <a href="/">Home</a>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-row space-x-2 items-center">
              <p>Conference</p>
              <motion.div
                animate={showDropdown ? "open" : "closed"}
                variants={arrowVariants}
              >
                <Image src={DownArrow} alt="" className="w-3 h-3 rotate-180" />
              </motion.div>
            </div>
            <motion.div
              className="absolute top-full mt-2 w-48 py-2 bg-white text-black rounded-lg shadow-xl transition-all transform-gpu z-10"
              animate={showDropdown ? "open" : "closed"}
              variants={dropdownVariants}
            >
              <a
                  className="block px-4 py-2 hover:bg-[#111042]  rounded-xl m-2 hover:text-white"
                  href="/authors"
              >
                Authors
              </a>
              <a
                className="block px-4 py-2 hover:bg-[#111042] rounded-xl m-2 hover:text-white"
                href="/registrations"
              >
                Registrations
              </a>
              <a
                className="block px-4 py-2 hover:bg-[#111042] rounded-xl m-2  hover:text-white"
                href="/speakers"
              >
                Speakers
              </a>
              <a
                className="block px-4 py-2 hover:bg-[#111042] rounded-xl m-2  hover:text-white"
                href="/committee"
              >
                Committee
              </a>
              <a
                className="block px-4 py-2 hover:bg-[#111042]  rounded-xl m-2 hover:text-white"
                href="/sponsorship"
              >
                Sponsorships
              </a>

              <a
                className="block px-4 py-2 hover:bg-[#111042]  rounded-xl m-2 hover:text-white"
                href="/icetite20"
              >
                ic-ETITE'20
              </a>
            </motion.div>
          </div>
          <a href="/">Expo'24</a>
          <a href="/visa">Visa</a>
          <a href="/contact">Contact</a>

        </div>
      )}

      {!isTabletOrMobile && (
        <div className="flex flex-row items-center justify-between">
          <a href="/">
            <Image src={Ieeenav} alt="" className="h-12 w-32 mx-4" />
          </a>
          <a href="https://vit.ac.in">
            <Image src={Vit} alt="" className="translate-x-5 h-10 w-auto" />
          </a>

        </div>
      )}
      {renderMobileMenu()}
    </div>
  );
}

export default Navbar;