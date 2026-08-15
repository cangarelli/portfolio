"use client";

import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface PortfolioCardProps {
  title: string;
  epigrafe: string;
}

const KnoledgesHeaders: React.FC<PortfolioCardProps> = ({
  title,
  epigrafe,
}) => {
  return (
    <div className="mt-4 w-full flex flex-col items-center justify-center">
      <Typography type="mainTitle" text={title} />
      <Typography type="subtitle" text={epigrafe}  />
    </div>
  );
};

export default KnoledgesHeaders;
