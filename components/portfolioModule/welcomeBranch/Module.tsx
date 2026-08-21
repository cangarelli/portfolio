"use client";
import welcomeSchema from "@/app/schemas/welcomeSchema";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";
import { Welcome } from "@/components/componentsBarrel";
interface welcomModuleProps {
  language: Language;
}

const WelcomeModule: React.FC<welcomModuleProps> = ({ language }) => {
  const dataSchema: {
    title: string;
    subTitle: string;
    comentary: string;
  } = welcomeSchema.get(language)!;

  return (
    <Welcome
      title={dataSchema.title}
      subTitle={dataSchema.subTitle}
      comentary={dataSchema.comentary}
    />
  );
};

export default WelcomeModule;
