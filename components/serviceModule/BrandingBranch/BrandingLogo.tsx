"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface BrandingLogoProps {
  img: StaticImageData;
  alt: string;
  size?: number;
}

const BrandingLogo: React.FC<BrandingLogoProps> = ({ img, alt, size }) => {
  return (
    <Image
      className={` h-[${size || 80}px] w-[${size || 80}px]  mx-2 hover:h-80% hover:w-80%`}
      src={img}
      alt={alt}
      loading="eager"
      height={size || 80}
      width={size || 80}
    />
  );
};

export default BrandingLogo;
