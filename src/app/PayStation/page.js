/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import SkillTag from "../components/SkillTag";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDarkMode } from "../context/DarkModeContext";

export default function PayStation() {
  const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div
      className={`${
        darkMode ? "bg-[#002C61] text-[#C3D6E9]" : "bg-[#fffcf1] text-[#034CA0]"
      } p-10  md:p-20 min-h-screen`}
    >
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 hover:opacity-80"
        >
          <Icon icon="material-symbols:arrow-back-ios" width={20} />
          <span className="text-base md:text-lg">Back</span>
        </button>

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
      <h2
        className={`${
          darkMode ? "text-[#C3D6E9]" : "text-[#034CA0]"
        } text-[48px] md:text-[60px] lg:text-[100px] text-center`}
      >
        PayStation.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Backend Developer" />
        <RoleTag label="2023" />
      </div>
      <p
        className={`${
          darkMode ? "text-[#C3D6E9]" : "bg-[#fffcf1] text-[#034CA0]"
        } text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10`}
      >
        This AI-powered application allows KMUTT Bookstore customers to take
        photos of 20 different stationery items, and the system automatically
        generates payment bills for easy and convenient checkout. My role
        involved designing the user experience and interface, developing the
        backend, and annotating images to support the machine learning process.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 my-10 p-10">
        {/* Tools Section */}
        <div className="lg:w-1/2 space-y-4">
          <h4
            className={`${
              darkMode ? "text-[#C3D6E9]" : "bg-[#fffcf1] text-[#034CA0]"
            } text-[32px] md:text-[36px] lg:text-[40px]`}
          >
            Tools;
          </h4>
          <p
            className={`${
              darkMode ? "text-[#C3D6E9]" : "bg-[#fffcf1] text-[#034CA0]"
            } text-[18px] md:text-[20px] lg:text-[24px] text-justify`}
          >
            Through this work, I gained hands-on experience in managing the
            database with MongoDB, and ensuring smooth data flow between
            components.
          </p>
          <div className="flex flex-wrap gap-4">
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/figma.svg"
              label="Figma"
            />
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/vscode.svg"
              label="Visual Studio Code"
            />
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/roboflow.svg"
              label="Roboflow"
            />
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/express.svg"
              label="Express"
            />
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/typescript.svg"
              label="TypeScript"
            />
            <SkillTag
              darkMode={darkMode}
              iconSrc="/icons/mongodb.svg"
              label="MongoDB"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 w-full sm:px-10">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full max-w-2xl rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/images/paymock.png"
                alt="Mari mock 1"
                className="w-full rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/paymock2.png"
                alt="Mari mock 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
