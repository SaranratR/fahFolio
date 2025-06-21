"use client";
import Image from "next/image";
import SkillTag from "./components/SkillTag";
import { Icon } from "@iconify/react";
import Project from "./components/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import React, { use, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ExpereinceTag from "./components/ExperienceTag";
import { useIsVisible } from "./components/useIsVisible";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const ref1 = useRef();
  const isVisisble1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisisble2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisisble3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisisble4 = useIsVisible(ref4);
  return (
    <div
      className={`content-center ${darkMode ? "dark" : ""} ${
        darkMode ? "bg-[#002C61]" : "#fffcf1"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`pl-10 md:pl-28 pr-10 md:pr-28 pt-20 transition-opacity ease-in duration-700 ${
          isVisisble1 ? "opacity-100" : "opacity-0"
        }`}
        id="About"
        ref={ref1}
      >
        <div className="grid grid-cols-1 mt-28 gap-0 justify-center  md:grid-cols-2 lg:grid-cols-2">
          <Image
            width={542}
            height={514}
            src="/images/myPic.jpg"
            className="rounded-3xl sm:"
            alt="SRR."
          />
          <div className="grid grid-flow-row auto-rows-max gap-4">
            <h1 className="text-[38px] pt-4 md:p-0 md:text-6xl lg:text-[100px] leading-none">
              I&apos;m Saranrat.
            </h1>
            <h3
              className={`${
                darkMode ? "text-[#C3D6E9]" : "text-[#034CA0]"
              }m-0 p-0 text-[36px] md:text-[40px] lg:text-[42px] leading-none`}
            >
              UX/UI designer and developer.
            </h3>
            <div className="">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] text-justify">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <button className="button w-[162px] h-[35px] md: w-[237px] md:h-[64px] items-start text-[18px] md:text-[22px]">
              Resume
            </button>
          </div>
        </div>
        <div
          className={`mt-28 mb-20 transition-opacity ease-in duration-700 ${
            isVisisble2 ? "opacity-100" : "opacity-0"
          }`}
          ref={ref2}
        >
          <h2 className="text-center text-[40px] md:text-[60px] lg:text-[100px] mb-20">
            Skills.
          </h2>

          {/* <div className="grid grid-rows-2 ml-20 mr-20"> */}
          <div className="grid grid-cols-1 md:grid-cols-[350px_auto] gap-2 p-0">
            <div>
              <h4 className="text-[28px] md:text-[30px] lg:text-[32px] leading-none">
                UX/UI Design
              </h4>
            </div>
            <div>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="flex flex-wrap mt-2 gap-2">
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/figma.svg"
                  label="Figma"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/photoshop.svg"
                  label="Photoshop"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[350px_auto] gap-2 mt-20 p-0">
            <div>
              <h4 className="text-[28px] md:text-[30px] lg:text-[32px] leading-none">
                Web Development
              </h4>
            </div>
            <div>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="col-start-2 flex flex-wrap items-center space-x-2 space-y-2 mt-2">
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/vscode.svg"
                  label="Visual Studio Code"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/javascript.svg"
                  label="Javascript"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/react.svg"
                  label="React"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/html.svg"
                  label="HTML"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/css.svg"
                  label="CSS"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/tailwind.svg"
                  label="Tailwind"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/postman.svg"
                  label="Postman"
                />
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/flutter.svg"
                  label="Flutter"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`-mx-10 mt-28 mb-20 transition-opacity ease-in duration-700 ${
            isVisisble3 ? "opacity-100" : "opacity-0"
          }`}
          id="Project"
          ref={ref3}
        >
          <h2 className="text-center text-[40px] md:text-[60px] lg:text-[100px] mb-10">
            Projects.
          </h2>
          <div className="max-w-[90%] mx-auto overflow-visible justify-center pb-10">
            <Swiper
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: false,
              }}
              navigation={true}
              pagination={true}
              centeredSlides={true}
              slidesPerView={1.3}
              loop={true}
              modules={[EffectCoverflow, Navigation, Pagination]}
            >
              <SwiperSlide className="flex justify-center items-center py-8">
                <div className="h-full">
                  <Project
                    ProjectName="ModLifes."
                    ProjDesc="Website to make life in university more convinince for KMUTT student"
                    ProjectImg="/images/modLifes.png"
                    ProjLabel="ModLifes"
                    href="/modLifes"
                    width={749}
                    height={421}
                    darkMode={darkMode}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="ModSport."
                  ProjDesc="Website to make life in university more convinince for KMUTT student"
                  ProjectImg="/images/ModSport.png"
                  ProjLabel="ModSport"
                  href="/modSport"
                  width={550}
                  height={464}
                  darkMode={darkMode}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="PayStation."
                  ProjDesc="Website to make life in university more convinince for KMUTT student"
                  ProjectImg="/images/PayStation.png"
                  ProjLabel="ModLifes"
                  href="/PayStation"
                  width={520}
                  height={385}
                  darkMode={darkMode}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="HealJai."
                  ProjDesc="Website to make life in university more convinince for KMUTT student"
                  ProjectImg="/images/HealJai.png"
                  ProjLabel="ModLifes"
                  href="/HealJai"
                  width={722}
                  height={462}
                  darkMode={darkMode}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="Mari."
                  ProjDesc="Website to make life in university more convinince for KMUTT student"
                  ProjectImg="/images/Mari.png"
                  ProjLabel="ModLifes"
                  href="/Mari"
                  width={600}
                  height={400}
                  darkMode={darkMode}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className={`mt-28 mb-20 transition-opacity ease-in duration-700 ${
            isVisisble4 ? "opacity-100" : "opacity-0"
          }`}
          id="Experience"
          ref={ref4}
        >
          <h2 className="text-center text-[40px] md:text-[60px] lg:text-[100px]">
            Expereinces.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[350px_auto] lg:grid-cols-[350px_auto] gap-2 mt-20">
            <div>
              <h5 className="text-[28px] md:text-[30px] lg:text-[32px] leading-none">
                2024;
              </h5>
            </div>
            <div>
              <h5 className="text-[24px] md:text-[30px] lg:text-[32px] italic font-medium leading-none">
                Bunnag Industrial Technologies and Software Co., Ltd.
              </h5>

              <div className="col-start-2 flex flex-wrap gap-2 mt-4">
                <ExpereinceTag darkMode={darkMode} label="June-August" />
                <ExpereinceTag
                  darkMode={darkMode}
                  label="Full-Stack Developer"
                />
                <ExpereinceTag darkMode={darkMode} label="UX/UI Designer" />
              </div>
              <div className="col-start-2 flex flex-wrap gap-2 mt-4">
                <p className="text-[18px] md:text-[20px] lg:text-[24px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
