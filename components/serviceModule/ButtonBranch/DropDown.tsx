"use client";

import React, { useEffect, ReactNode, useState } from "react";
import { useFloating, shift, offset, autoUpdate } from "@floating-ui/react";

interface dropDownProps {
  children: ReactNode[];
  menuTitle: string | ReactNode;
  noBox?: boolean;
}

const DropDown: React.FC<dropDownProps> = ({ children, menuTitle, noBox }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Hook de Floating UI
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(8), // Espacio entre botón y menú
      shift({ padding: 10 }), // ¡ESTO evita que se salga de los bordes laterales!
    ],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    const handleClickOutside = (evento: MouseEvent | TouchEvent) => {
      if (
        refs?.reference?.current instanceof HTMLElement &&
        !refs.reference.current.contains(evento?.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div ref={refs.setReference} className="relative inline-block mx-2">
      {/* BUTTON DROPDOWN */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={`relative focus:outline-none ${!noBox && "p-2 bg-white rounded-lg border border-zinc-200"} transition-all duration-200 w-full max-w-fit	h-max p-1 flex flex-row items-center justify-center font-black text-black`}
      >
        {menuTitle}
        {/* <span className={`transition-transform duration-200 `}>▼</span> */}
      </button>

      {/* DROPDOWN INFORMATION */}
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={`z-50 // bg-white // border border-zinc-200 rounded-lg shadow-xl // p-2 min-w-max // flex flex-col // ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        // className={`absolute z-50  // transform -translate-x-1/2 // border border-zinc-200 rounded-lg shadow-xl // start-1/2 min-w-max mt-2 p-2 bg-white // group-focus-within:block // flex flex-col ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
      >
        {children?.map((option, index: number) => {
          return (
            option && (
              <span
                key={`${index}`}
                className={`flex flex-row gap-2 justify-center items-center font-black text-black w-full min-w-max hover:bg-zinc-100 p-2 rounded-lg`}
              >
                {option}
              </span>
            )
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
