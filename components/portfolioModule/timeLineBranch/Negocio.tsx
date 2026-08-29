"use client";
import timeLineSchema from "@/app/schemas/timeLineSchema";
import { TimeLineRow, Typography } from "@/components/componentsBarrel";
import React from "react";

interface TimeLineProps {
  title: string;
  rows: Array<{
    left: string[];
    center: string;
    rigth: string[];
  }>;
}

const TimeLime: React.FC<TimeLineProps> = ({ title, rows }) => {
  const rD = timeLineSchema.get("esp")!;
  return (
    <div className="mx-auto max-w-2xl grid grid-flow-row auto-rows-max">
      <Typography type="mainTitle" text={title} />
      {rows.map((row, i) => (
        <TimeLineRow
          key={i}
          left={row.left}
          center={row.center}
          rigth={row.rigth}
          position={`${rD?.rows.length === i + 1 && "last"}`}
        />
      ))}
    </div>
  );
};

export default TimeLime;
