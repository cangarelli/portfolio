"use client";
import React from "react";
import { BsCss, BsTypescript } from "react-icons/bs";
import { FaReact, FaGithub } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoFigma,
  IoLogoHtml5,
} from "react-icons/io5";
import { SiHandlebarsdotjs } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  TechsIndividualLayer,
  Typography,
} from "@/components/componentsBarrel";

interface TechsProps {
  one: string;
  two: string;
  three: string;
}

const TechsList: React.FC<TechsProps> = ({ one, two, three }) => {
  return (
    <div className="grid md:grid-cols-3 items-start justify-center // py-2 mx-auto max-w-2xl  // rouded-lg shadow-xl">
      <div className="flex flex-col items-center justify-start p-4 m-2">
        <Typography type="subtitle" text={one} />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <TechsIndividualLayer label="HTML" icon={<IoLogoHtml5 />} />
          <TechsIndividualLayer label="CSS" icon={<BsCss />} />
          <TechsIndividualLayer
            label="JavaScript"
            icon={<IoLogoJavascript />}
          />
          <TechsIndividualLayer label="TypeScript" icon={<BsTypescript />} />
        </div>
      </div>
      <div className="flex  flex-col items-center justify-start p-4 m-2">
        <Typography type="subtitle" text={two} />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <TechsIndividualLayer label="Figma" icon={<IoLogoFigma />} />
          <TechsIndividualLayer label="Git Hub" icon={<FaGithub />} />
          <TechsIndividualLayer label="VS Code" icon={<BiLogoVisualStudio />} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start p-4 m-2">
        <Typography type="subtitle" text={three} />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <TechsIndividualLayer label="React" icon={<FaReact />} />
          <TechsIndividualLayer label="NextJS" icon={<SiNextdotjs />} />
          <TechsIndividualLayer label="Tailwind" icon={<SiTailwindcss />} />
          <TechsIndividualLayer label="Sass" icon={<IoLogoSass />} />
          <TechsIndividualLayer
            label="HandleBars"
            icon={<SiHandlebarsdotjs />}
          />
          {/* <TechsIndividualLayer label="Express" icon={<SiHandlebarsdotjs/>} /> */}
        </div>
      </div>
    </div>
  );
};

export default TechsList;
