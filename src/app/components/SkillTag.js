import Image from "next/image";

export default function SkillTag({ iconSrc, label }) {
  return (
    <div
      className="flex items-center border border-[#186CCF] rounded-3xl p-2 gap-2 h-[30px] md:h-[40px]
    "
    >
      <Image src={iconSrc} alt={label} width={20} height={20} />
      <span className="text-[16px] md:text-[22px]">{label}</span>
    </div>
  );
}
