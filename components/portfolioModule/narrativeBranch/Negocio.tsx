"use client";
import { NarrativesColumn, Typography } from "@/components/componentsBarrel";
import { GeneralSChema } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";

interface NarrativeProps {
  data: GeneralSChema;
}

const Narrative: React.FC<NarrativeProps> = ({ data }) => {
  return (
    <div className="w-screen pb-6 bg-gradient-to-b from-purple-50 to-purple-500 rounded-lg">
      <div className={`mt-4 flex flex-col items-center justify-center`}>
        <Typography type="mainTitle" text={data.title} />
        <Typography type="subtitle" text={data.epigrafe} />
      </div>

      <div className={`grid grid-cols-3 max-w-2xl mx-auto  `}>
        {data.section.map((col, i) => (
          <NarrativesColumn key={i} subtitle={col.subtitle} text={col.text} />
        ))}
      </div>
    </div>
  );
};

export default Narrative;
