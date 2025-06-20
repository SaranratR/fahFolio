"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
          className={`px-8 py-2 rounded-full flex space-x-10 justify-center`}
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

        <div className="flex-shrink-0">
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
