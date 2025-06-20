import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function HealJai() {
  return (
    <div className="p-10 mt-10 md:p-20">
      <h2 className="text-[48px] md:text-[60px] lg:text-[100px] text-center">
        HealJai.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Backend Developer" />
      </div>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10">
        This project aims to contribute to SDG11, which focuses on health and
        well-being. It enables people to take care of their mental health and
        promotes mental health awareness through a feature that allows users to
        anonymously communicate with a psychiatrist.
      </p>
    </div>
  );
}
