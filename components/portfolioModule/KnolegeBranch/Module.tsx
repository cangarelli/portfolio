"use client";

import { KnoledgesHeaders, Knoledges } from "@/components/componentsBarrel";
import knoledgesSchema from "@/app/schemas/knoledgesSchemas";
import { UserPreferenceContext } from "@/app/contexts/userPreferenceContext";
import { useContext } from "react";

interface PortfolioModuleProps {
}

const KnoledgesModule: React.FC<PortfolioModuleProps> = ({}) => {
    const { preferences } = useContext(UserPreferenceContext);

  const dataSchema: {
    title: string;
    epigrafe: string;
    section: Array<{
      subtitle: string;
      text: string[];
    }>;
  } = knoledgesSchema.get(preferences.language)!;

  return (
    <div className="w-screen pb-4 mb-4// flex flex-col items-center justify-start // bg-gradient-to-r from-purple-50 to-purple-500 rounded-lg">
      <KnoledgesHeaders
        title={dataSchema?.title}
        epigrafe={dataSchema?.epigrafe}
      />
      <div className={`max-w-2xl grid grid-cols-3 justify-center gap-2`}>
        {dataSchema?.section.map((sec, index) => (
          <Knoledges key={index} data={sec} i={index} />
        ))}
      </div>
    </div>
  );
};

export default KnoledgesModule;
