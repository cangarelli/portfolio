"use client";

import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface PortfolioCardProps {
  data: { subtitle: string; text: string[] };
}

const SectionColumns: React.FC<PortfolioCardProps> = ({ data }) => {
  return (
    <div className="pb-6 flex flex-grow items-start justify-center // size-full ">
      <div
        className={`flex flex-grow items-start justify-center // size-full py-2 px-2 mb-2 // rounded-lg shadow-xl  `}
      >
        <div className="mx-auto h-full flex flex-grow flex-col items-center justify-start">
          <Typography
            type="title"
            text={data.subtitle}
            textStyle="text-black text-center"
            bgStyle="px-4 my-2 border-b-2 border-emerald-500 rounded-lg shadow-xl"
          />
          {data.text.map((t, index) => (
            <Typography key={index} type="bodyJustify" text={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionColumns;
