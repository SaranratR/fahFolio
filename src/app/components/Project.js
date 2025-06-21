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
  height
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
      className="bg-[#F4F4F4] w-[335px] h-[415px] md:w-[871px] md:h-[592px] p-10 rounded-xl shadow-xl"
    >
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[36px] md:text-[42px]">{ProjectName}</h3>
        <p className="text-[15px] md:text-[20px]">{ProjDesc}</p>
        <div className="items-center justify-center">
            <Image src={ProjectImg} alt={ProjLabel} width={width} height={height} className="object-center"/>
        </div>
        
      </div>
    </div>
  );
}
