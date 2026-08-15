"use client";

import { PortfolioHero, PortfolioHeader } from "@/components/componentsBarrel";
import { intro } from "@/app/schemas/mainPageSchemas";
import { StaticImageData } from "next/image";
import { useContext } from "react";
import { UserPreferenceContext } from "@/app/contexts/userPreferenceContext";
interface PortfolioModuleProps {
  language: string
}

const PortfolioModule: React.FC<PortfolioModuleProps> = ({language}) => {
    const { preferences } = useContext(UserPreferenceContext);

  const dataSchema: {
    title: string;
    epigrafe: string;
    section: Array<{
      image: StaticImageData;
      subtitle: string;
      text: string[];
    }>;
  } = intro.get(language)!;

  return (
    <div className="w-screen ">
      <PortfolioHeader
        title={dataSchema?.title}
        epigrafe={dataSchema?.epigrafe}
      />
      {dataSchema?.section.map((sec, index) => (
        <PortfolioHero key={index} data={sec} i={index} />
      ))}
    </div>
  );
};

export default PortfolioModule;
