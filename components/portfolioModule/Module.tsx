"use client";

import { SectionHeader, Section } from "@/components/componentsBarrel";
import { intro } from "@/app/schemas/mainPageSchemas";
import knoledgesSchema from "@/app/schemas/knoledgesSchemas";
import { GeneralSChema } from "@/config/globalTypesLibrary/dataSchemaTypes";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";

interface SectionModuleProps {
  language: Language;
  subject: "intro" | "conocimientos";
  id?: string;
}

const SectionModule: React.FC<SectionModuleProps> = ({
  language,
  subject,
  id,
}) => {
  const sectionProps = {
    intro: {
      schema: intro,
      headerBg: "bg-gradient-to-b from-blue-200 to-blue-0",
      layout: "flex flex-col items-center justify-center",
      bodyBg: "",
    },
    conocimientos: {
      schema: knoledgesSchema,
      headerBg: " ",
      layout: "grid grid-cols-3 max-w-2xl mx-auto ",
      bodyBg: "bg-gradient-to-r from-purple-50 to-purple-500 rounded-lg",
    },
  };
  const dataSchema: GeneralSChema = sectionProps[subject].schema.get(language)!;

  return (
    <div
      {...(id && { id: id })}
      className={`w-screen ${sectionProps[subject].bodyBg} my-4`}
    >
      <SectionHeader
        title={dataSchema.title}
        epigrafe={dataSchema.epigrafe}
        bgColor={sectionProps[subject].headerBg}
      />
      <div className={`${sectionProps[subject].layout}`}>
        {dataSchema?.section.map((sec, index) => (
          <Section key={index} data={sec} i={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionModule;
