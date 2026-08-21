"use client";
import {
  ButtonGlobal,
  ProyectsCard,
  Typography,
} from "@/components/componentsBarrel";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import picture from "@/app/assets/svg/porta-retrato.svg"

type ObjectProyect = {
      name: string;
      logo: StaticImageData;
      logoSize: number;
      url: string;
      description: string;
    }
interface ProyectsProps {
  data: {
    title: string;
    subtitle: string;
    proyects: Array< ObjectProyect| ReactNode>;
  };
}

const Proyects: React.FC<ProyectsProps> = ({ data }) => {
  const dataProyUpdate = data.proyects.toSpliced(1,0, <Image className="invisible absolute md:relative md:visible" src={picture} key="1" loading="eager" height={200} alt="Ilustración decorativa"/>)
  return (
    <div className="size-full pt-10 pb-5 //  bg-gradient-to-b from-teal-50 to-teal-500 // flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Typography type="title" text={data.title} />
        <Typography type="subtitle" text={data.subtitle} />
      </div>
      {/* <Image src={picture} height={200} alt="Ilustración decorativa"/> */}
      <div className="w-full flex flex-col items-center justify-start md:flex-row md:justify-araound px-6 gap-4">
        {dataProyUpdate.map((proy, i) => {
          if (React.isValidElement(proy)  ) {
            return proy
         
          } else if (proy && typeof proy === "object" && "logo" in proy ){
               return  <ProyectsCard
            key={`${i}`}
            logo={proy.logo}
            logoSize={proy.logoSize}
            description={proy.description}
            url={proy.url}
          />
          }
     
        })}
      </div>
    </div>
  );
};

export default Proyects;
