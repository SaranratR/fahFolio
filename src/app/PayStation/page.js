import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function PayStation() {
  return (
    <div className="p-10 mt-10 md:p-20">
      <h2 className="text-[48px] md:text-[60px] lg:text-[100px] text-center">
        PayStation.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Backend Developer" />
      </div>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10">
        An application for self-checkout in KMUTT Book Store. This application
        is time-saving for the customer; by scanning the items using image
        object detection, the application will generate bills based on the
        detected items and summarize the cost.
      </p>
    </div>
  );
}
