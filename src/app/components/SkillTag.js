import Image from "next/image";

export default function SkillTag({ darkMode, iconSrc, label }) {
  return (
    <div
      className={`flex items-center border ${
        darkMode ? "border-[#d6e8ff]" : "border-[#186CCF]"
      } rounded-3xl p-2 gap-2 h-[30px] md:h-[40px]
    `}
    >
      <Image src={iconSrc} alt={label} width={20} height={20} />
      <span
        className={`text-[14px] md:text-[16px] lg:text-[18px] ${
          darkMode ? "text-[#d6e8ff]" : "text-[#186CCF]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
