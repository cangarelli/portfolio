"use client";
import { StaticImageData } from "next/image";
import React from "react";
import { DefuseBanner, Typography } from "@/components/componentsBarrel";
interface PortfolioProps {
  data: { image: StaticImageData; subtitle: string; text: string[] };
  i: number;
}

const PortfolioHero: React.FC<PortfolioProps> = ({ data, i }) => {
  console.log("Profile hero control", { index: i, text: `${100 * (i + 1)}` });
  const bgClasses: string[] = [
    "bg-gradient-to-b from-blue-50 to-blue-100",
    "bg-gradient-to-b from-blue-100 to-blue-200",
    "bg-gradient-to-b from-blue-200 to-blue-300",
    "bg-gradient-to-b from-blue-300 to-blue-400",
    "bg-gradient-to-b from-blue-400 to-blue-500",
  ];
  return (
    <div
      className={`flex items-center justify-center // bg-opacity-50 ${bgClasses[i]} // w-full py-6 px-2 mb-2 // rounded-lg shadow-xl `}
    >
      {i % 2 === 0 ? (
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <DefuseBanner img={data.image} alt="Hero Image" i={i} />

          <div className="mx-2  flex flex-col items-center justify-center">
            <Typography
              type="title"
              text={data.subtitle}
              bgStyle="px-4 my-2 border-b-2 border-emerald-500 rounded-lg shadow-xl"
            />
            {data.text.map((t, index) => (
              <Typography key={index} type="bodyJustify" text={t} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="mx-2 flex flex-col items-center justify-center">
            <Typography
              type="title"
              text={data.subtitle}
              bgStyle="px-4 my-2 border-b-2 border-emerald-500 rounded-lg shadow-xl"
            />
            {data.text.map((t, index) => (
              <Typography key={index} type="bodyJustify" text={t} />
            ))}
          </div>
          <DefuseBanner img={data.image} alt="Hero Image" i={i} />
        </div>
      )}
    </div>
  );
};

export default PortfolioHero;
