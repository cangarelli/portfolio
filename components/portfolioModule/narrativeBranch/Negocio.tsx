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
      <div
        className={`flex items-center justify-center max-w-2xl mx-auto my-4 `}
      >
        <NarrativesColumn
          subtitle={data.section.Dev.subtitle}
          text={data.section.Dev.text}
        />
      </div>

      <div className={`grid grid-cols-2  gap-4 max-w-2xl mx-auto  `}>
        <NarrativesColumn
          subtitle={data.section.Psi.subtitle}
          text={data.section.Psi.text}
        />

        <NarrativesColumn
          subtitle={data.section.Atitud.subtitle}
          text={data.section.Atitud.text}
        />
      </div>
    </div>
  );
};

export default Narrative;
