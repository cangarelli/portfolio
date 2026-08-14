"use client";

import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface PortfolioCardProps {
  title: string;
  epigrafe: string;
}

const PortfolioHeader: React.FC<PortfolioCardProps> = ({ title, epigrafe }) => {
  return (
    <div className="py-4 bg-green-50 flex flex-col items-center justify-center">
      <Typography type="mainTitle" text={title} />
      <Typography type="subtitle" text={epigrafe} />
    </div>
  );
};

export default PortfolioHeader;
