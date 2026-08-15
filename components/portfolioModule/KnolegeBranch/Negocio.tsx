"use client";

import React from "react";
import { Typography } from "@/components/componentsBarrel";
interface PortfolioProps {
  data: { subtitle: string; text: string[] };
  i: number;
}

const Knoledges: React.FC<PortfolioProps> = ({ data, i }) => {

  return (
    <div
      className={`flex flex-grow items-start justify-center // size-full py-6 px-2 mb-2 // rounded-lg shadow-xl `}
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
  );
};

export default Knoledges;
