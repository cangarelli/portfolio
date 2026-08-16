"use client";
import React from "react";
import { Hero, SectionColumns } from "@/components/componentsBarrel";
import { GeneralSectionData } from "@/config/globalTypesLibrary/globalTypesBarrel";

interface SectionProps {
  data: GeneralSectionData;
  i: number;
}

const Section: React.FC<SectionProps> = ({ data, i }) => {
  console.log("Profile hero control", { index: i, text: `${100 * (i + 1)}` });

  return (
    <div className={`flex items-center justify-center // w-full px-2 `}>
      {"image" in data ? (
        <Hero data={data} i={i} />
      ) : (
        <SectionColumns data={data} />
      )}
    </div>
  );
};

export default Section;
