"use client";

import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";
import { Proyects } from "@/components/componentsBarrel";
import proyectsSchema from "@/app/schemas/proyectsSchemas";
interface ProyectsModuleProps {
  language: Language;
}

const ProyectsModule: React.FC<ProyectsModuleProps> = ({ language }) => {
  const dataSchema = proyectsSchema.get(language)!;

  return <Proyects data={dataSchema} />;
};

export default ProyectsModule;
