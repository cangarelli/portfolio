"use client";

import React from "react";
import Typography from "./Typography";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <footer className="max-w-2xl my-10 flex items-center justify-center ">
<div className="flex flex-col items-center justify-center">
      <Typography type="title" text={"Contacto"} />
      <Typography type="bodyCenter" text={"agarelli91@gmail.com"} />
</div>
  </footer>;
};

export default Footer;
