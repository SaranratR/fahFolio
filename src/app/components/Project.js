"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Project({
  ProjectName,
  ProjDesc,
  ProjectImg,
  ProjLabel,
  href,
  width,
  height,
  darkMode,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        darkMode ? "bg-[#D6E8FF]" : "bg-[#F4F4F4]"
      } w-[335px] h-[400px] sm:w-[550px] sm:h-[530px] md:w-[606px] md:h-[550px] lg:w-[871px] lg:h-[592px] p-10 rounded-xl shadow-xl`}
    >
      <div className="flex flex-col items-center gap-2">
        <h6 className={` text-[36px] md:text-[42px]`}>{ProjectName}</h6>
        <p
          className={`${
            darkMode ? "text-[#034ca0]" : "bg-[#F4F4F4]"
          } text-[15px] md:text-[16px] lg:text-[20px]`}
        >
          {ProjDesc}
        </p>
        <div className="items-center justify-center">
          <Image
            src={ProjectImg}
            alt={ProjLabel}
            width={width}
            height={height}
            className="object-center"
          />
        </div>
      </div>
    </div>
  );
}
