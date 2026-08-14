"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Typography } from "@/components/componentsBarrel";
interface PortfolioProps {
  img: StaticImageData;
  data: { subtitle: string; text: string[] };
  i: number;
}

const PortfolioHero: React.FC<PortfolioProps> = ({ img, data, i }) => {
  console.log("Profile hero control", { index: i, text: `${100 * (i + 1)}` });
  const bgClasses: string[] = [
    "bg-gradient-to-b from-green-50 to-green-100",
    "bg-gradient-to-b from-green-100 to-green-200",
    "bg-gradient-to-b from-green-200 to-green-300",
    "bg-gradient-to-b from-green-300 to-green-400",
    "bg-gradient-to-b from-green-400 to-green-500",
  ];
  return (
    <div
      className={`flex items-center justify-center // bg-opacity-50 ${bgClasses[i]} // w-full py-6 px-2 my-2 rounded-lg shadow-xl `}
    >
      {i % 2 === 0 ? (
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Image
            className="border-2 border-black rounded-lg shadow-xl"
            src={img}
            alt="Hero Image"
            height={180}
            width={180}
          />

          <div className="flex flex-col items-center justify-center">
            <Typography type="title" text={data.subtitle} />
            {data.text.map((t, index) => (
              <Typography key={index} type="bodyJustify" text={t} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <Typography type="title" text={data.subtitle} />
            {data.text.map((t, index) => (
              <Typography key={index} type="bodyJustify" text={t} />
            ))}
          </div>
          <Image
            className="border-2 border-black rounded-lg shadow-xl"
            src={img}
            alt="Hero Image"
            height={180}
            width={180}
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioHero;
