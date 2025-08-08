/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";
import SkillTag from "../components/SkillTag";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDarkMode } from "../context/DarkModeContext";

export default function Mari() {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Title */}
      <h2
        className={`${
          darkMode ? "text-[#C3D6E9]" : "text-[#034CA0]"
        } text-[48px] md:text-[60px] lg:text-[100px] text-center`}
      >
        HealJai.
      </h2>

      {/* Roles */}
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Backend Developer" />
        <RoleTag label="2023" />
      </div>

      {/* Description */}
      <p
        className={`${
          darkMode ? "text-[#C3D6E9]" : "bg-[#fffcf1] text-[#034CA0]"
        } text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10`}
      >
        Anonymous Mental Health Chat Application is a mobile application project
        developed to address the growing mental health challenges in Thailand,
        in line with SDG 3 – Good Health and Well-being. This project aims to
        provide an affordable and anonymous platform where individuals can chat
        directly with psychiatrists without the need for appointments or
        identity disclosure. Users can securely access the chat system by
        entering a PIN code, enabling immediate consultations that remove
        barriers such as stigma, high costs, and long waiting times.
      </p>

      {/* Tools + Images */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 my-10">
        {/* Tools Section */}
        <div className="lg:w-1/2 space-y-4 px-4 sm:px-10 md:px-20">
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
            This project allowed me to gain more front-end development skills
            using Flutter, enhance my UX/UI design expertise with Figma, and
            strengthen my ability to create intuitive, accessible, and secure
            digital experiences.
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
              iconSrc="/icons/flutter.svg"
              label="Flutter"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 w-full px-4 sm:px-10 md:px-20">
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
                src="/images/mockup1.png"
                alt="Mari mock 1"
                className="w-full rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/Mockup_5.png"
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
