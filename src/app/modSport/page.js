import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function ModSport() {
  return (
    <div className="p-20">
      <h2 className="text-[100px] text-center">ModSport.</h2>
      <div className="flex justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Frontend Developer" />
        <RoleTag label="Backend Developer" />
      </div>
      <p className="text-justify p-20">
        This project was created to help students and stadium staff book and
        manage facility more conveniently, saving time by eliminating the need
        to visit the stadium in person for reservations. It incorporates a
        stadium reservation system that can search for available facility on
        campus.
      </p>
    </div>
  );
}
