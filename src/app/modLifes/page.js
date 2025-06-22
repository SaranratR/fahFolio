import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ModLifes() {
  return (
    <div className="p-10 mt-10 md:p-20">
      <h2 className="text-[48px] md:text-[60px] lg:text-[100px] text-center">
        ModLifes.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Frontend Developer" />
      </div>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] indent-8 text-justify p-10">
        A website designed to simplify the lives of KMUTT students with numerous
        features, including schedules, airdrop, and more. My team is responsible
        for the schedule module, which allows students to create their own
        timetables, incorporating events or other activities.
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/modLifes.png"
          alt="modLifes"
          width={749}
          height={421}
          className="justify-center"
        />
      </div>
    </div>
  );
}
