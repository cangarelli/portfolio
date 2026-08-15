"use client"
import { KnoledgesModule, PortfolioModule } from "@/components/componentsBarrel";
import { useContext } from "react";
import { UserPreferenceContext } from "./contexts/userPreferenceContext";

export default function Home() {
    const { preferences } = useContext(UserPreferenceContext);
  
  return (
    <main className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <PortfolioModule language={preferences.language}/>
      <KnoledgesModule />
    </main>
  );
}
