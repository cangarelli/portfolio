import { StaticImageData } from "next/image";

interface SectionBase {
  subtitle: string;
  text: string[];
}

export interface GeneralSectionWithImage extends SectionBase {
  image: StaticImageData; // obligatorio
}
export type GeneralSectionData = SectionBase | GeneralSectionWithImage;

export type GeneralSChema = {
  title: string;
  epigrafe: string;
  section: Array<GeneralSectionData>;
};
