"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import avatar from "@/app/assets/png/Avatar-Lego.png";
import lampOn from "@/app/assets/png/foco-con-luz.png";
import lampOff from "@/app/assets/png/foco-sin-luz.png";

const AnimationAvatar: React.FC<{}> = ({}) => {
  const [isLighted, setIsLighted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLighted(entry.isIntersecting); // true si está visible
      },
      { threshold: 0.3 }, // porcentaje de visibilidad requerido
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  const animateLigth = `transition-opacity duration-600 ease-in-out ${isLighted ? "opacity-100" : "opacity-0"}`;
  const animateDarkness = `transition-colors duration-600 ease-in-out ${isLighted ? "bg-white" : "bg-black"}`;
  return (
    <div
      ref={ref}
      className={`relative // ${animateDarkness}  // flex flex-col // overflow-hidden w-1/3 // border-2 border-black rounded-lg `}
    >
      {/* Lamp */}
      <div className="relative flex items-center justify-center">
        <Image
          className={`${animateLigth} // absolute -top-13 left-15 origin-center scale-40 rotate-180 `}
          src={lampOn}
          alt="lamp On"
        />
        <Image
          className={`absolute -top-19 -left-30 origin-center scale-25 translate-x-45 rotate-180`}
          src={lampOff}
          alt="lamp Off"
        />
      </div>
      {/* Ligth */}
      <div
        aria-hidden="true"
        className={`aspect-video // border rounded-full // -translate-y-1/8 translate-x-1/4 // ${animateLigth} // opacity-25 dark:opacity-5 // absolute // top-0  left-0 // h-50 w-50 //  bg-yellow-500 bg-gradient-radial from-amber-300 via-amber-300/50 to-transparent // blur-2xl`}
      ></div>
      {/* Avatar */}
      <Image
        className={`relative top-10 -left-5 //  scale-85  // ${animateLigth}`}
        src={avatar}
        alt="avatar"
      />
    </div>
  );
};

export default AnimationAvatar;
