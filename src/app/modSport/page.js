import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function ModSport() {
  return (
    <div className="p-10 mt-10 md:p-20">
      <h2 className="text-[48px] md:text-[60px] lg:text-[100px] text-center">
        ModSport.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Frontend Developer" />
        <RoleTag label="Backend Developer" />
      </div>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10">
        This project was created to help students and stadium staff book and
        manage facility more conveniently, saving time by eliminating the need
        to visit the stadium in person for reservations. It incorporates a
        stadium reservation system that can search for available facility on
        campus.
      </p>
    </div>
  );
}
