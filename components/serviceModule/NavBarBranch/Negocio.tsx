"use client";
import React, { ReactNode, useContext } from "react";
import brandLogo from "@/app/assets/png/logo.png";
import { BrandingLogo, NavBarButtonPad } from "@/components/componentsBarrel";
import { UserPreferenceContext } from "@/app/contexts/userPreferenceContext";
import Link from "next/link";

interface NavBarProps {
  props?: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ props }) => {
  const { preferences, handlePreference } = useContext(UserPreferenceContext);

  return (
    <nav className="max-w-2xl mx-auto // my-2 // flex items-center justify-between">
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("start")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <BrandingLogo img={brandLogo} alt="Main page logo" />
      </button>
      <NavBarButtonPad
        language={preferences.language}
        manager={handlePreference}
      />
    </nav>
  );
};

export default NavBar;
