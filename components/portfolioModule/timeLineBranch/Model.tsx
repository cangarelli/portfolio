"use client";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";
import { TimeLime } from "@/components/componentsBarrel";
import timeLineSchema from "@/app/schemas/timeLineSchema";

interface TimeLineModelProps {
  language: Language;
}

const TimeLineModel: React.FC<TimeLineModelProps> = ({ language }) => {
  const rD = timeLineSchema.get("esp")!;

  return (
    <div className="w-screen pb-6 bg-gradient-to-b from-purple-50 to-purple-500 rounded-lg">
      <TimeLime title={rD.title} rows={rD.rows} />
    </div>
  );
};

export default TimeLineModel;
