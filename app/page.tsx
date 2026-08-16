"use client";
import { SectionModule } from "@/components/componentsBarrel";
import { useContext } from "react";
import { UserPreferenceContext } from "./contexts/userPreferenceContext";

export default function Home() {
  const { preferences } = useContext(UserPreferenceContext);

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SectionModule language={preferences.language} subject="intro" />
      <SectionModule
        id={"target"}
        language={preferences.language}
        subject="conocimientos"
      />
    </div>
  );
}
