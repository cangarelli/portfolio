"use client";
import { Typography } from "@/components/componentsBarrel";
import { GeneralSectionData } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";

const NarrativesColumn: React.FC<GeneralSectionData> = ({ subtitle, text }) => {
  return (
    <div className="flex flex-col flex-grow items-center justify-start // size-full py-2 px-2 mb-2 // rounded-lg shadow-xl">
      <Typography
        type="title"
        text={subtitle}
        textStyle="text-black text-center"
        bgStyle="px-4 my-2 border-b-2 border-emerald-500 rounded-lg shadow-xl"
      />
      {text.map((t, index) => (
        <Typography key={index} type="bodyJustify" text={t} />
      ))}
    </div>
  );
};

export default NarrativesColumn;
