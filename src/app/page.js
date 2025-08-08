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
import { useDarkMode } from "./context/DarkModeContext";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

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
        className={`pl-10 md:pl-20 lg:pl-28 pr-10 md:pr-20 lg:pr-28 pt-20 transition-opacity ease-in duration-700 ${
          isVisisble1 ? "opacity-100" : "opacity-0"
        }`}
        id="About"
        ref={ref1}
      >
        <div className="grid grid-cols-1 mt-28 gap-0 justify-center md:grid-cols-2 lg:grid-cols-2 ">
          <Image
            width={542}
            height={514}
            src="/images/myPic.jpg"
            className="rounded-3xl sm:"
            alt="SRR."
          />
          <div className="grid grid-flow-row auto-rows-max gap-4 md:ml-6 lg:ml-4">
            <h1 className="text-[42px] pt-4 md:p-0 md:text-[44px] tablet:text-[50px] lg:text-[100px] leading-none">
              I&apos;m Saranrat.
            </h1>
            <h3
              className={`${
                darkMode ? "text-[#C3D6E9]" : "text-[#034CA0]"
              }m-0 p-0 text-[32px] md:text-[34px] tablet:text-[36px] lg:text-[42px] leading-none`}
            >
              UX/UI designer and developer.
            </h3>
            <p className="font-extralight">Based Bangkok, Thailand.</p>
            {/* <div className="">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] text-justify">
                Lorem ipsum dolor sit amet.
              </p>
            </div> */}

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Saranrat_resume.pdf";
                link.download = "Saranrat_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="button w-[162px] h-[35px] md:w-[237px] md:h-[64px] items-start text-[18px] md:text-[22px]"
            >
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
          <div className="grid grid-cols-1 lg:grid-cols-[350px_auto] gap-6 md:gap-2 p-0">
            <div>
              <h4 className="text-center md:text-start text-[28px] md:text-[30px] lg:text-[32px] leading-none">
                UX/UI Design
              </h4>
            </div>
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-justify leading-none indent-8 md:indent-0">
                I design intuitive, user-centered interfaces that prioritize
                accessibility and seamless interaction. My design process
                includes wireframing, prototyping, and user testing to ensure a
                smooth and enjoyable experience across devices.
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

          <div className="grid grid-cols-1  lg:grid-cols-[350px_auto] gap-2 mt-20 p-0">
            <div>
              <h4 className="text-center md:text-start text-[28px] md:text-[30px] lg:text-[32px] leading-none">
                Web Development
              </h4>
            </div>
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-none indent-8 md:indent-0 text-justify">
                I build responsive and accessible web applications using modern
                front-end technologies. I write clean, maintainable code and
                follow best practices in both design and development.
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
                <SkillTag
                  darkMode={darkMode}
                  iconSrc="/icons/firebase.svg"
                  label="Firebase"
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
              // navigation
              pagination={true}
              centeredSlides={true}
              // slidesPerView={1.3}
              loop={true}
              modules={[EffectCoverflow, Navigation, Pagination]}
              breakpoints={{
                0: {
                  // Phones (portrait & small screens)
                  slidesPerView: 1.01,
                  navigation: false, // Hide arrows on small screens
                },
                390: {
                  slidesPerView: 1.05,
                  navigation: false,
                },
                430: {
                  slidesPerView: 1.13,
                  navigation: false,
                },
                640: {
                  // iPads / Tablets (in portrait)
                  slidesPerView: 0.8,
                  navigation: false,
                },
                768: {
                  // iPads / Tablets (landscape)
                  slidesPerView: 1.02,
                  navigation: true,
                },

                1024: {
                  // Computers / Desktops
                  slidesPerView: 1.5,
                  navigation: true,
                },
              }}
            >
              {/* <SwiperSlide className="flex justify-center items-center py-8">
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
              </SwiperSlide> */}
              <SwiperSlide>
                <Project
                  ProjectName="ModSport."
                  ProjDesc="Application that let students and staff effortlessly find and book campus stadium facilities anytime, anywhere."
                  ProjectImg="/images/ModSport.png"
                  ProjLabel="ModSport"
                  href={`/modSport?darkMode=${darkMode}`}
                  width={550}
                  height={464}
                  darkMode={darkMode}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="PayStation."
                  ProjDesc="Shop smarter at KMUTT Book Store with an app that detects your items and checks you out in seconds — no waiting, no hassle."
                  ProjectImg="/images/PayStation.png"
                  ProjLabel="ModLifes"
                  href={`/PayStation?darkMode=${darkMode}`}
                  width={520}
                  height={385}
                  darkMode={darkMode}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  ProjectName="HealJai."
                  ProjDesc="Your mental health matters — connect anonymously with psychiatrists and get support anytime with this easy, awareness-driven platform."
                  ProjectImg="/images/HealJai.png"
                  ProjLabel="ModLifes"
                  href={`/HealJai?darkMode=${darkMode}`}
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
                  href={`/Mari?darkMode=${darkMode}`}
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
          <div className="grid grid-cols-1 lg:grid-cols-[350px_auto] lg:grid-cols-[350px_auto] gap-2 mt-20">
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
                <ExpereinceTag darkMode={darkMode} label="UX/UI Designer" />
                <ExpereinceTag darkMode={darkMode} label="Software Engineer" />
                <ExpereinceTag darkMode={darkMode} label="Tester" />
              </div>
              <div className="col-start-2 flex flex-wrap gap-2 mt-4">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-justify">
                  Developed the BBBChess learning platform with features for
                  course creation and role-based access. Contributed to UI
                  design, frontend/backend integration, testing, and AWS image
                  handling in an Agile team.
                </p>
                {showMore && (
                  <ul
                    className={`list-disc pl-10 mt-2 text-[15px] md:text-[16px] lg:text-[18px] font-light space-y-2 text-justify ${
                      darkMode ? "text-[#d6e8ff]" : "text-[#186ccf]"
                    }`}
                  >
                    <li>
                      Designed user interfaces for company and BBBChess websites
                      using Figma and MUI with responsive layouts.
                    </li>
                    <li>
                      Developed frontend features in TypeScript, implementing
                      course creation, editing, and display functionality.
                    </li>
                    <li>
                      Built and connected backend APIs using GraphQL, Apollo
                      Server, and MySQL Workbench.
                    </li>
                    <li>
                      Integrated frontend and backend using custom React hooks
                      for chapter and course management.
                    </li>
                    <li>
                      Tested UI components with Vitest, simulating user
                      interactions and ensuring functionality across edge cases.
                    </li>
                    <li>
                      Managed image uploads with AWS S3, gaining hands-on
                      experience with cloud-based storage solutions.
                    </li>
                    <li>
                      Worked in Agile (SCRUM) sprints using GitHub Projects and
                      participated in daily stand-ups and biweekly demos.
                    </li>
                  </ul>
                )}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className={`mt-2 ${
                    darkMode ? "text-[#d6e8ff]" : "text-[#186ccf]"
                  } hover:underline italic`}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
                {/* <p className="text-[16px] md:text-[18px] lg:text-[20px] text-justify">
                  During my summer internship at Bunnag Industrial Technologies
                  and Software Co., Ltd., I worked as a UX/UI Designer, Software
                  Engineer, and Tester on the BBBChess platform. I designed user
                  interfaces using Figma and MUI, developed front-end features
                  with TypeScript, and implemented GraphQL APIs for backend
                  integration. I also tested components using Vitest and managed
                  image uploads to AWS S3. The internship improved my coding
                  skills, teamwork, and understanding of the software
                  development lifecycle through Agile (SCRUM) practices and
                  regular sprint planning on GitHub.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <footer
          className={`-mx-10 md:-mx-20 lg:-mx-28 px-10 py-4 flex justify-between items-center ${
            darkMode
              ? "bg-[#D6E8FF] text-[#034CA0]"
              : "bg-[#034ca0] text-[#FFFCF1]"
          }`}
        >
          <p
            className={`text-[14px] md:text-[18px] lg:text-[20px] font-extralight ${
              darkMode ? "text-[#034CA0]" : "text-[#FFFCF1]"
            }`}
          >
            © 2025 Saranrat Roteaim. All rights reserved.
          </p>
          <div className="justify-end flex flex-end gap-2">
            <a
              href="mailto:saranrat.rote@gmail.com"
              target="_blank"
              className={`${darkMode ? "text-[#034CA0]" : "text-[#FFFCF1]"}`}
              rel="noopener noreferrer"
            >
              <Icon icon="ic:baseline-alternate-email" />
            </a>
            <a
              href="https://www.linkedin.com/in/saranrat-roteaim"
              target="_blank"
              className={`${darkMode ? "text-[#034CA0]" : "text-[#FFFCF1]"}`}
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              href="https://www.behance.net/SaranratR"
              className={`${darkMode ? "text-[#034CA0]" : "text-[#FFFCF1]"}`}
            >
              <Icon icon="ri:behance-fill" />
            </a>
            <a
              href="https://github.com/SaranratR"
              className={`${darkMode ? "text-[#034CA0]" : "text-[#FFFCF1]"}`}
            >
              <Icon icon="mdi:github" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
