import { Typography } from "@/components/componentsBarrel";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProyectsCardProps {
  logo: StaticImageData;
  logoSize: number;
  description: string;
  url: string;
}

const ProyectsCard: React.FC<ProyectsCardProps> = ({
  logo,
  logoSize,
  description,
  url,
}) => {
  return (
    <a
      className="flex flex-col flex-grow items-center justify-start // size-full p-2 mb-2 // rounded-lg shadow-xl"
      href={url}
    >
      <Image
        src={logo}
        loading="eager"
        width={logoSize}
        height={logoSize}
        alt="Web site logo"
      />
      <Typography type="bodyJustify" bgStyle="my-4" text={description} />
    </a>
  );
};

export default ProyectsCard;
