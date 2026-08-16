"use client";

import { ReactNode, useEffect, useState } from "react";
import { NavBar } from "@/components/componentsBarrel";

interface NavBarModuleProps {
  props?: ReactNode;
}

const NavBarModule: React.FC<NavBarModuleProps> = ({ props }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 45); // cuando baja más de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky  top-0 z-50 // w-full // transition-opacity duration-400 ${isSticky ? "opacity-50  bg-transparent focus-within:bg-sky-900   focus-within:border-b-2 focus-within:border-sky-400 focus-within:opacity-100" : "opacity-100 bg-sky-900  border-b-2 border-sky-400"} // shadow-xl`}
    >
      <NavBar />
    </div>
  );
};

export default NavBarModule;
