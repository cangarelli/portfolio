"use client";
import { Dekko, Limelight } from "next/font/google";
import React, { ReactElement } from "react";

const deko = Dekko({ weight: ["400"], subsets: ["latin"] });

// 1️⃣ Definimos una interfaz para las props
interface TipographyProps {
  type:
    | "mainTitle"
    | "title"
    | "subtitle"
    | "bodyCenter"
    | "bodyJustify"
    | "comment"
    | "accesory"
    | "notify"; // restringimos valores posibles
  text: string; // el texto siempre es un string
  bgStyle?: string; // opcional
  textStyle?: string; // opcional
}
// 2️⃣ Declaramos el componente con TipographyProps
const Typography: React.FC<TipographyProps> = ({
  type,
  text,
  bgStyle,
  textStyle,
}) => {
  const typeStyles: Record<
    TipographyProps["type"],
    { bStyle: string; tStyle: string }
  > = {
    mainTitle: {
      bStyle: `font-bold // px-10 my-2 //  border-b-2 border-white rounded-lg ${deko.className} ${bgStyle}`,
      tStyle: `${textStyle || "text-black"} text-3xl text-center font-bold`,
    },
    title: {
      bStyle: `${bgStyle} ${deko.className}`,
      tStyle: `${textStyle || "text-black"} text-xl  font-bold`,
    },
    subtitle: {
      bStyle: `w-full my-2 px-1 // rounded-lg ${bgStyle}`,
      tStyle: `font-bold text-center`,
    },
    bodyCenter: {
      bStyle: ``,
      tStyle: `${textStyle || "text-black"} text-center`,
    },
    bodyJustify: {
      bStyle: `w-full px-2 // rounded-lg  ${bgStyle}`,
      tStyle: `${textStyle || "text-black"} text-justify`,
    },
    comment: {
      bStyle: `text-center rounded-lg px-2 ${bgStyle}`,
      tStyle: ``,
    },
    accesory: {
      bStyle: `rounded-lg ${bgStyle}`,
      tStyle: `${textStyle || "text-black"} text-justify flex gap-2 items-center justify-center`,
    },
    notify: { bStyle: ``, tStyle: `${textStyle || "text-black"}` },
  };

  return (
    <div className={typeStyles[type]?.bStyle}>
      {type === "mainTitle" ? (
        <h1 className={typeStyles[type]?.tStyle}>{text}</h1>
      ) : type === "title" ? (
        <h2 className={typeStyles[type]?.tStyle}>{text}</h2>
      ) : type === "subtitle" ? (
        <h3 className={typeStyles[type]?.tStyle}>{text}</h3>
      ) : type === "bodyCenter" ? (
        <h4 className={typeStyles[type]?.tStyle}>{text}</h4>
      ) : type === "bodyJustify" ? (
        <h5 className={typeStyles[type]?.tStyle}>{text}</h5>
      ) : type === "comment" ? (
        <h6 className={typeStyles[type]?.tStyle}>{text}</h6>
      ) : type === "accesory" ? (
        <p className={typeStyles[type]?.tStyle}>{text}</p>
      ) : (
        <p className={typeStyles[type]?.tStyle}>{text}</p>
      )}
    </div>
  );
};

export default Typography;
