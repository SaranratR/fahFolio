import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";

export default function ModSport() {
  return (
    <div className="p-20">
      <h2 className="text-[100px] text-center">PayStation.</h2>
      <div className="flex justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Backend Developer" />
      </div>
      <p className="text-justify p-20">
        An application for self-checkout in KMUTT Book Store. This application
        is time-saving for the customer; by scanning the items using image
        object detection, the application will generate bills based on the
        detected items and summarize the cost.
      </p>
    </div>
  );
}
