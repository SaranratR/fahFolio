"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? darkMode
            ? "bg-[#002C61]"
            : "bg-[#FFFCF1]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mt-10 px-20">
        <div className="flex-shrink-0">
          <Image
            src="/fahFolio.png"
            width={80}
            height={80}
            alt="Logo"
            className="ml-4"
          />
        </div>
        <div
          className={`hidden md:flex px-8 py-2 rounded-full flex space-x-10 justify-center`}
        >
          <a className="font-code" href="#About">
            About
          </a>
          <a className="font-code" href="#Project">
            Projects
          </a>
          <a className="font-code" href="#Experience">
            Experience
          </a>
          <a className="font-code" href="#Contact">
            Contact
          </a>
        </div>
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden"
          >
            <Image
              src={isMenuOpen ? "/icons/MenuOpen.svg" : "/icons/menuClose.svg"}
              alt="Menu Toggle"
              width={19}
              height={19}
              className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-[#fffcf1] dark:bg-[#002C61] w-full px-6 pb-4 space-y-4">
            <a href="#About" className="block font-code">
              About
            </a>
            <a href="#Project" className="block font-code">
              Projects
            </a>
            <a href="#Experience" className="block font-code">
              Experience
            </a>
            <a href="#Contact" className="block font-code">
              Contact
            </a>
            <button onClick={toggleDarkMode}>
              <Icon
                icon={darkMode ? "solar:sun-bold" : "solar:moon-bold"}
                className="w-5 h-5"
                color={darkMode ? "#D6E8FF" : "#000"}
              />
            </button>
          </div>
        )}

        <div
          className={`hidden flex-shrink-0 ${
            isMenuOpen ? "hidden" : "block"
          } md:block`}
        >
          <button
            type="button"
            className="w-[20px] h-[20px] mr-4"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Icon icon="solar:sun-bold" color="#D6E8FF" />
            ) : (
              <Icon icon="solar:moon-bold" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
