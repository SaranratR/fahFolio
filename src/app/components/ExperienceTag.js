import Image from "next/image";

export default function ExpereinceTag({ darkMode, label }) {
  return (
    <div
      className={`flex items-center border ${
        darkMode ? "border-[#d6e8ff]" : "border-[#186CCF]"
      } rounded-3xl p-2 gap-2 h-[30px] md:h-[40px]
  `}
    >
      <span
        className={`text-[16px] md:text-[22px] ${
          darkMode ? "text-[#d6e8ff]" : "text-[#186CCF]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
