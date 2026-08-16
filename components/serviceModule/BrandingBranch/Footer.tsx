"use client";

import React from "react";
import Typography from "./Typography";
import { IoLogoLinkedin } from "react-icons/io5";
import ButtonGlobal from "../ButtonBranch/ButtonGlobal";
import { FaGithub } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-screen mt-10 bg-purple-700 border-t-2 border-purple-500">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <Typography type="title" text={"Contacto"} />
        <div className="flex items-center justify-center gap-2">
          <ButtonGlobal
            type="out"
            icon={<FaGithub />}
            label={"GitHub"}
            value="https://github.com/cangarelli"
          />

          <Typography type="bodyCenter" text={"agarelli91@gmail.com"} />
          <ButtonGlobal
            type="out"
            icon={<IoLogoLinkedin />}
            label={"Linkedin"}
            value="https://www.linkedin.com/in/carlos-andres-garelli"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
