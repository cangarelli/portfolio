"use client";
import React, { ReactElement, ReactNode } from "react";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft  } from "react-icons/fa";



interface CarrouselButtonPadProps {
  children: ReactElement;
  next: () => void;
  prev: () => void;
  arrows?: { prev: ReactElement; next: ReactElement };
}

const CarrouselButtonPad: React.FC<CarrouselButtonPadProps> = ({
  children,
  next,
  prev,
  arrows,
}) => {
  return (
    <div className="relative // rounded-xl // size-full max-w-xl // flex sm:mx-5 ">
      <button
        onClick={prev}
        className="cursor-pointer // flex items-center justify-start // z-20 // h-full w-1/2 // absolute inset-y-0 left-0  origin-center // rounded-l-lg // py-1 px-3 grow // font-black"
      >
        <span className="rounded-full text-black py-1 px-2">
          {arrows?.prev ? arrows.prev : <FaRegArrowAltCircleLeft />}
        </span>
      </button>
      {children}
      <button
        onClick={next}
        className="cursor-pointer // flex items-center justify-end // z-20 // h-full w-1/2 // absolute inset-y-0 right-0  origin-center //  rounded-r-lg // py-1 px-3 grow // font-black"
      >
        <span className="rounded-full text-black py-1 px-2">
          {arrows?.next ? arrows.next : <FaRegArrowAltCircleRight />}
        </span>
      </button>
    </div>
  );
};

export default CarrouselButtonPad;
