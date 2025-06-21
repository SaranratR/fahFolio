import Image from "next/image";

export default function RoleTag({ darkMode, label }) {
  return (
    <div
      className="flex items-center border border-[#186CCF] rounded-3xl p-2 gap-2 h-[30px] md:h-[40px]
    "
    >
      <span className={`text-[16px] md:text-[18px] lg:text-[22px]`}>
        {label}
      </span>
    </div>
  );
}
