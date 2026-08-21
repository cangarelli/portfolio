"use client";
// Modulos externos
import React from "react";

// Multimedia
import retratoGhibli from "@/app/assets/png/retratoGhibli.png";
import decoracion1 from "@/app/assets/png/decoracion1.png";
import decoracion2 from "@/app/assets/svg/decoracion2.svg";

// Componentes internos
import { Typography, WelcomeIlustration } from "@/components/componentsBarrel";

interface Welcom {
  title: string;
  subTitle: string;
  comentary: string;
}
const Welcome: React.FC<Welcom> = ({ title, subTitle, comentary }) => {
  return (
    <div className="size-full shadow-xl">
      <div className="w-full bg-gradient-to-b from-blue-300 to-blue-0 flex flex-col items-center justify-center">
        <div className="max-w-2xl my-10 // flex items-center justify-betweem">
          <div className="my-5 w-full // flex flex-col items-start justify-start">
            <Typography type="mainTitle" text={title} />
            <Typography type="subtitle" text={subTitle} />
          </div>
          <div className="w-full // relative // flex flex-col items-end justify-center // md:flex-row md:items-center md:justify-end">
            <WelcomeIlustration
              style="invisible md:visible -rotate-90 absolute top-15 -left-20"
              img={decoracion1}
              height={100}
              width={200}
            />
            <WelcomeIlustration img={retratoGhibli} height={150} width={150} />
          </div>
        </div>
      </div>
      <div className="pt-15 pb-5 bg-gradient-to-b from-blue-0 to-blue-500 flex flex-col items-center justify-center gap-2">
        <Typography type="bodyCenter" text={comentary} />
        <WelcomeIlustration style="my-5" img={decoracion2} />
      </div>
    </div>
  );
};

export default Welcome;
