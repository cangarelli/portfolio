"use client";
import {
  AnimationAvatar,
  ProyectsCard,
  Typography,
} from "@/components/componentsBarrel";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import avatar from "@/app/assets/png/Avatar-Lego.png";
import lampOn from "@/app/assets/png/foco-con-luz.png";
import lampOff from "@/app/assets/png/foco-sin-luz.png";

type ObjectProyect = {
  name: string;
  logo: StaticImageData;
  logoSize: number;
  url: string;
  description: string[];
};

interface ProyectsProps {
  data: {
    title: string;
    subtitle: string;
    proyects: Array<ObjectProyect | ReactNode>;
  };
}

const Proyects: React.FC<ProyectsProps> = ({ data }) => {
  const [isLighted, setIsLighted] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLighted(entry.isIntersecting); // true si está visible
      },
      { threshold: 0.3 }, // porcentaje de visibilidad requerido
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  const dataProyUpdate = data.proyects.toSpliced(
    1,
    0,

    <AnimationAvatar key="Random" />,
  );

  const animateDarknessBg = `transition-colors duration-600 ease-in-out ${isLighted ? "bg-gradient-to-b from-teal-50 to-teal-500 " : "bg-gradient-to-b from-teal-50 to-black"}`;
  const animateLigth = `transition-opacity duration-600 ease-in-out ${isLighted ? "opacity-100" : "opacity-0"}`;
  const animateDarkness = `transition-colors duration-600 ease-in-out ${isLighted ? "bg-white" : "bg-black"}`;
  const animateAvatar = `transition-transform duration-1600 ease-in-out translate-y-40 group-hover:translate-y-15  `;

  return (
    <div
      className={`size-full pt-10 pb-5// relative  // ${animateDarknessBg}  // flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <Typography type="title" text={data.title} />
        <Typography type="subtitle" text={data.subtitle} />
      </div>
      {/* <Image src={picture} height={200} alt="Ilustración decorativa"/> */}

      <div
        className={`group  invisible md:visible ${isLighted ? "fixed  -bottom-15 -left-5 " : "absolute -bottom-10 -left-15"} origin-center scale-45`}
      >
        {/* Lamp */}
        <div className="origin-center relative z-50 flex items-center justify-center">
          <Image
            className={`${animateLigth} // absolute -top-13 left-15 origin-center scale-40 rotate-180 `}
            src={lampOn}
            alt="lamp On"
          />
          <Image
            className={`absolute -top-19 -left-30  scale-25 translate-x-45 rotate-180`}
            src={lampOff}
            alt="lamp Off"
          />
        </div>
        {/* Ligth */}
        <div
          aria-hidden="true"
          className={`aspect-video // border rounded-full //  origin-center -translate-y-1/8 translate-x-1/4 // ${animateLigth} // opacity-25 dark:opacity-5 // absolute // top-2  -right-10 // h-50 w-50 //  bg-yellow-500 bg-gradient-radial from-amber-300 via-amber-300/50 to-transparent // blur-2xl`}
        ></div>
        {/* Avatar */}
        <div
          className={`relative left-5   overflow-y-hidden overflow-x-clip // border-b-2 border-black rounded-lg`}
        >
          <Image
            className={`relative ${animateAvatar} // border-b-4 shadow-lg //  scale-85  // ${animateLigth}`}
            src={avatar}
            alt="avatar"
          />
          <span className="absolute -right-8 top-15 mt-2 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ¡Eureka!
          </span>
        </div>
      </div>
      <div
        ref={divRef}

        className="w-full flex flex-col items-center justify-start md:flex-row md:items-start md:justify-araound px-6 gap-4"
      >
        {data.proyects.map((proy, i) => {
          // if (React.isValidElement(proy)) {
          //   return proy;
          // } else
          if (proy && typeof proy === "object" && "logo" in proy) {
            return (
              <ProyectsCard
                key={`${i}`}
                logo={proy.logo}
                logoSize={proy.logoSize}
                description={proy.description}
                url={proy.url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Proyects;
