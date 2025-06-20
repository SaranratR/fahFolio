import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function ModLifes() {
  return (
    <div className="p-20">
      <h2 className="text-[100px] text-center">ModLifes.</h2>
      <div className="flex justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Frontend Developer" />
      </div>
      <p className="text-justify p-20">
        A website designed to simplify the lives of KMUTT students with numerous
        features, including schedules, airdrop, and more. My team is responsible
        for the schedule module, which allows students to create their own
        timetables, incorporating events or other activities.
      </p>
    </div>
  );
}
