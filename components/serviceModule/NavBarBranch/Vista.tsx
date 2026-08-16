"use client";
import React from "react";
import { ButtonGlobal, DropDown } from "@/components/componentsBarrel";
import { MdOutlineLanguage } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { GiStarFormation } from "react-icons/gi";
import { BsViewList } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";

interface NavBarButtonPadProps {
  language: Language;
  manager: (first: any) => void;
}

const NavBarButtonPad: React.FC<NavBarButtonPadProps> = ({
  language,
  manager,
}) => {
  const handleLanguagueChange = (): void => {
    language === "esp"
      ? manager({ language: "eng" })
      : manager({ language: "esp" });
  };
  const btnSchema = new Map([
    ["esp", { view1: "some", view2: "Saber hacer" }],
    ["eng", { view1: "some", view2: "Know how" }],
  ]);
  return (
    <div className="flex">
      <DropDown menuTitle={<BsViewList />}>
        <ButtonGlobal
          type="out"
          icon={<FaGithub />}
          label={"GitHub"}
          value="https://github.com/cangarelli"
        />
        <ButtonGlobal
          type="button"
          icon={<SiSololearn />}
          label={btnSchema.get(language)?.view2}
          handler={() =>
            document
              .getElementById("target")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </DropDown>

      <DropDown menuTitle={<GiStarFormation />}>
        <ButtonGlobal
          type="out"
          icon={<FaGithub />}
          label={"GitHub"}
          value="https://github.com/cangarelli"
        />
        <ButtonGlobal
          type="out"
          icon={<IoLogoLinkedin />}
          label={"Linkedin"}
          value="https://www.linkedin.com/in/carlos-andres-garelli"
        />
      </DropDown>

      <DropDown menuTitle={<MdOutlineLanguage />}>
        <ButtonGlobal
          type="button"
          off={language === "esp" ? true : false}
          label={`Español`}
          handler={handleLanguagueChange}
        />
        <ButtonGlobal
          type="button"
          off={language === "eng" ? true : false}
          label={`English`}
          handler={handleLanguagueChange}
        />
      </DropDown>
    </div>
  );
};

export default NavBarButtonPad;
