import Image from "next/image";

export default function ExpereinceTag({ label }) {
  return (
    <div
      className="flex items-center border border-[#186CCF] rounded-3xl p-2 gap-2 h-[40px]
    "
    >
      <span>{label}</span>
    </div>
  );
}
