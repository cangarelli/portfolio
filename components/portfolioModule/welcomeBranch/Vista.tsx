"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface WelcomeIlustratonProps {
  img: StaticImageData;
  width?: number;
  height?: number;
  style?: string;
}

const WelcomeIlustration: React.FC<WelcomeIlustratonProps> = ({
  img,
  width,
  height,
  style,
}) => {
  return (
    <Image
      className={`${style}`}
      {...(width && { width: width })}
      {...(height && { height: height })}
      loading="eager"
      src={img}
      alt="Ilustración"
    />
  );
};

export default WelcomeIlustration;
