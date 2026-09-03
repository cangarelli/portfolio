"use client";
import React from "react";

interface CarrouselPositionMarkerProps {
  elementsAmount: number;
  position: number;
}

const CarrouselPositionMarker: React.FC<CarrouselPositionMarkerProps> = ({
  elementsAmount,
  position,
}) => {
  const markers = [];
  for (let i = 0; i < elementsAmount; i++) {
    markers.push(
      <div
        key={`${i}-sdw1`}
        className={`bg-purple-300 shadow-xl border-white border-2 h-[10px] rounded-full mx-5 ${position === i ? "w-[50px]" : "w-[10px]"}`}
      ></div>,
    );
  }

  return (
    <div className="absolute bottom-0 -translate-y-[12px] z-30 w-full flex items-center justify-center">
      {markers}
    </div>
  );
};

export default CarrouselPositionMarker;
