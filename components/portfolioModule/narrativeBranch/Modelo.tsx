"use client";
import narrativesSchema from "@/app/schemas/narrativesSchemas";
import {
  GeneralSChema,
  Language,
} from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";
import { Narrative } from "@/components/componentsBarrel";

interface NarrativeModelProps {
  language: Language;
}

const NarrativeModel: React.FC<NarrativeModelProps> = ({ language }) => {
  const dataSchema: GeneralSChema = narrativesSchema.get(language)!;

  return <Narrative data={dataSchema} />;
};

export default NarrativeModel;
