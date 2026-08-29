"use client";
import { Typography } from "@/components/componentsBarrel";
import React from "react";

interface TimeLineRowProps {
  left: string[];
  center: string;
  rigth: string[];
  position?: string;
}
const TimeLineRow: React.FC<TimeLineRowProps> = ({
  left,
  center,
  rigth,
  position,
}) => {
  const especialProp = position === "last" && "hidden";

  return (
    <div className=" w-full max-w-full my-4  // flex flex-col items-center justify-center">
      <div className="grid grid-flow-col // my-2 w-full max-w-full //  ">
        <div className=" // px-4 // gap-2 flex flex-col items-center justify-start">
          {left.map((item, i) => (
            <Typography key={`${i}21`} type="comment" text={item} />
          ))}
        </div>
        <div className="px-4 // flex items-start justify-center">
          <Typography type="bodyCenter" text={center} />
        </div>
        <div className="px-4 // gap-2 flex flex-col items-center justify-start">
          {rigth.map((item, i) => (
            <Typography key={`${i}22`} type="comment" text={item} />
          ))}
        </div>
      </div>
      <div
        className={`relative ${especialProp}  h-15 border-l-2 border-r-2 border-gray-500`}
      >
        {/* FLECHA HACIA ABAJO */}
        <div
          className="absolute left-0 right-0 -bottom-2 -translate-x-3 mx-auto w-0 h-0 
              border-l-12 border-r-12 border-t-10  
              border-l-transparent border-r-transparent border-t-gray-500 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default TimeLineRow;
