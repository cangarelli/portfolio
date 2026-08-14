"use client";
import React from "react";
import { ButtonGlobal, DropDown } from "@/components/componentsBarrel";
import { MdOutlineLanguage } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { GiStarFormation } from "react-icons/gi";

import { FaGithub } from "react-icons/fa";

interface NavBarButtonPadProps {
  language: string;
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
  return (
    <div className="">
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
