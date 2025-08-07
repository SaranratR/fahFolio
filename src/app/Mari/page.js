/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import RoleTag from "../components/RoleTag";
import { Icon } from "@iconify/react";
import SkillTag from "../components/SkillTag";
import { useRouter } from "next/navigation";

export default function Mari() {
  const router = useRouter();
  return (
    <div className="p-10 mt-10 md:p-20">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-1 text-gray-600 hover:text-black"
      >
        <Icon icon="material-symbols:arrow-back-ios" width={20} />
        <span className="text-base md:text-lg">Back</span>
      </button>
      <h2 className="text-[48px] md:text-[60px] lg:text-[100px] text-center">
        Mari.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <RoleTag label="UX/UI Designer" />
        <RoleTag label="Frontend Developer" />
        <RoleTag label="Backend Developer" />
        <RoleTag label="2024" />
      </div>
      <p className="text-[18px] md:text-[20px] lg:text-[24px] indent-8 text-justify p-10">
        Mari is a web-based application project developed as part of the CSC490
        Senior Project coursework. This project is an individual effort focused
        on solving a real-world problem using artificial intelligence and
        natural language processing techniques. The primary objective of Mari is
        to provide Thai users with an AI-powered chatbot that offers automatic
        responses to questions related to the Thai Debt Collection Act of 2015.
        By utilizing large language models (LLMs) in combination with
        Retrieval-Augmented Generation (RAG), Mari enables users to access
        accurate legal information quickly and easily through a conversational
        interface. The platform is designed to improve legal awareness,
        especially among individuals affected by debt-related issues who often
        lack access to professional legal advice. Mari also features a secure
        authentication system, allowing users to register, verify their emails,
        and reset passwords when needed. This project allowed me to enhance my
        skills in UX/UI design using Figma, develop frontend components with
        secure authentication flows, perform quality assurance, and prepare
        legal documents through OCR for LLM training.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <SkillTag iconSrc="/icons/figma.svg" label="Figma" />
        <SkillTag
          // darkMode={darkMode}
          iconSrc="/icons/vscode.svg"
          label="Visual Studio Code"
        />
        <SkillTag
          // darkMode={darkMode}
          iconSrc="/icons/react.svg"
          label="React"
        />
        <SkillTag
          // darkMode={darkMode}
          iconSrc="/icons/typescript.svg"
          label="React"
        />
        <SkillTag
          // darkMode={darkMode}
          iconSrc="/icons/golang.svg"
          label="React"
        />
        <SkillTag
          // darkMode={darkMode}
          iconSrc="/icons/mongodb.svg"
          label="React"
        />
      </div>
      <div className="flex justify-center my-4">
        <img
          src="/images/mock-1.png"
          alt="Mari mock"
          className="rounded-lg shadow-lg w-full max-w-4xl"
        />
      </div>
    </div>
  );
}
