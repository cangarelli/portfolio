"use client";

import { ReactNode } from "react";
import { NavBar } from "@/components/componentsBarrel";

interface NavBarModuleProps {
  props?: ReactNode;
}

const NavBarModule: React.FC<NavBarModuleProps> = ({ props }) => {
  return (
    <div className="w-full bg-sky-900 shadow-xl border-b-2 border-sky-400">
      <NavBar />
    </div>
  );
};

export default NavBarModule;
