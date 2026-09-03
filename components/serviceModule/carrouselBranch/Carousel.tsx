"use client";

import { ReactElement, useState } from "react";
import {
  CarrouselButtonPad,
  CarrouselPositionMarker,
} from "@/components/componentsBarrel";

interface CarouselProps {
  children: ReactElement[];
}
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length,
    );
  };
  if (children) {
    return (
      <CarrouselButtonPad next={handleNext} prev={handlePrev}>
        <div className="relative flex flex-col items-center justify-center size-full">
          {children[currentEventIndex]}
          <CarrouselPositionMarker
            elementsAmount={children.length}
            position={currentEventIndex}
          />
        </div>
      </CarrouselButtonPad>
    );
  }
};

export default Carousel;
