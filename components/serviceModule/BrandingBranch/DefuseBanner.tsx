"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface DefuseBannerProps {
  img: StaticImageData;
  alt: string;
  i?: number;
}

const DefuseBanner: React.FC<DefuseBannerProps> = ({ img, alt, i }) => {
  const radialMaskPosition =
    i && (i + 1) % 2 === 0 ? `mask-radial-at-left` : `mask-radial-at-right`;
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <Image
        className={`object-cover ${radialMaskPosition} mask-radial-from-20% mask-radial-to-70%`}
        // width= "auto"
        // height="auto"
        src={img}
        alt={alt}
        fill
      />
    </div>
  );
};

export default DefuseBanner;
