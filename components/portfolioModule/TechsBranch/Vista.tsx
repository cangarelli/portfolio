"use client";
import { Typography } from "@/components/componentsBarrel";
import React, { ReactElement } from "react";
interface TechsIndividualLayerProps {
  label: string;
  icon: ReactElement<any>;
}
const TechsIndividualLayer: React.FC<TechsIndividualLayerProps> = ({
  label,
  icon,
}) => {
  const iconWithClasses = React.cloneElement(icon, { size: 64 });

  return (
    <div className="flex flex-col items-center justify-center">
      {iconWithClasses}
      <Typography type="bodyCenter" text={label} />
    </div>
  );
};

export default TechsIndividualLayer;
