"use client";
import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface ServicesCardProps {
  serviceName: string;
  serviceDescription: string;
}
const ServicesCard: React.FC<ServicesCardProps> = ({
  serviceName,
  serviceDescription,
}) => {
  return (
    <div className="bg-gradient-to-b form-blue-50 via-blue-500 to-blue-300 // drop-shadow-xl // flex flex-col items-center justify-center // w-full h-60 p-8 m-2 //shadow-xl rounded-lg">
      <Typography type="title" text={serviceName} />
      <Typography type="bodyCenter" text={serviceDescription} />
    </div>
  );
};

export default ServicesCard;
