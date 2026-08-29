import { Typography } from "@/components/componentsBarrel";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProyectsCardProps {
  logo: StaticImageData;
  logoSize: number;
  description: string[];
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
      className=":second-child // flex flex-col flex-grow items-center justify-start // size-full p-2 mb-2 // rounded-lg shadow-xl"
      href={url}
    >
      <Image
        src={logo}
        loading="eager"
        width={logoSize}
        height={logoSize}
        alt="Web site logo"
      />
      <ul
        role="list"
        className="list-disc marker:text-green-700 flex flex-col items-center justify-start"
      >
        {description.map((elm, i) => (
          <li key={`${i}-5`} className="first:list-none first:w-full w-4/5 ">
            <Typography type="bodyJustify" bgStyle="my-4" text={elm} />
          </li>
        ))}
      </ul>
    </a>
  );
};

export default ProyectsCard;
