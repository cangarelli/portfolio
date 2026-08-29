"use client";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";
import { TechsList, Typography } from "@/components/componentsBarrel";

interface TechsListModelProps {
  language: Language;
}

const TechsListModel: React.FC<TechsListModelProps> = ({ language }) => {
  const CatLabels = new Map([
    [
      "esp",
      {
        title: "Conocimientos ténicos",
        one: "Lenguajes",
        two: "Herramientas",
        three: "Marcos de trabajo",
      },
    ],
    [
      "eng",
      {
        title: "Know How",
        one: "Languages",
        two: "Tools",
        three: "Frameworks",
      },
    ],
  ]);
  const useData = CatLabels.get(language)!;
  return (
    <div
      id="techs"
      className="w-screen pt-15 bg-gradient-to-t from-purple-300 to-purple-500 // flex flex-col items-center justify-center "
    >
      {/* <Typography type="title" text={useData.title} /> */}
      <TechsList one={useData.one} two={useData.two} three={useData.three} />
    </div>
  );
};

export default TechsListModel;
