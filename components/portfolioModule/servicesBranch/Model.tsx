"use client";
import React from "react";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import Services from "./Negocio";

interface ServicesModelProps {
  language: Language;
}

const ServicesModel: React.FC<ServicesModelProps> = ({ language }) => {
  return <Services />;
};

export default ServicesModel;
