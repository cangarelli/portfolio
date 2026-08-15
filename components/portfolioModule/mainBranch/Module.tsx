"use client";

import { UserPreferenceContext } from "@/app/contexts/userPreferenceContext";
import { useContext } from "react";
import { PortfolioHero, PortfolioHeader } from "@/components/componentsBarrel";
import { intro } from "@/app/schemas/mainPageSchemas";
import image from "@/app/assets/png/brand_icon.png";
interface PortfolioModuleProps {}

const PortfolioModule: React.FC<PortfolioModuleProps> = ({}) => {
  const { preferences } = useContext(UserPreferenceContext);

  const dataSchema: {
    title: string;
    epigrafe: string;
    section: Array<{ subtitle: string; text: string[] }>;
  } = intro.get(preferences.language)!;

  return (
    <div className="w-screen">
      <PortfolioHeader
        title={dataSchema?.title}
        epigrafe={dataSchema?.epigrafe}
      />
      {dataSchema?.section.map((sec, index) => (
        <PortfolioHero key={index} img={image} data={sec} i={index} />
      ))}
    </div>
  );
};

export default PortfolioModule;
