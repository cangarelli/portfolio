"use client";

import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface SectionHeaderProps {
  title: string;
  epigrafe: string;
  bgColor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  epigrafe,
  bgColor,
}) => {
  return (
    <div
      className={`mt-4 ${bgColor} flex flex-col items-center justify-center`}
    >
      <Typography type="mainTitle" text={title} />
      <Typography type="subtitle" text={epigrafe} />
    </div>
  );
};

export default SectionHeader;
