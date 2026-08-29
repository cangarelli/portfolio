"use client";
import {
  ProyectsModule,
  WelcomeModule,
  NarrativeModel,
  TechsListModel,
  TimeLineModel,
  AnimationAvatar,
} from "@/components/componentsBarrel";
import { useContext } from "react";
import { UserPreferenceContext } from "./contexts/userPreferenceContext";

export default function Home() {
  const { preferences } = useContext(UserPreferenceContext);

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <WelcomeModule language={preferences.language} />
      {/* <SectionModule language={preferences.language} subject="intro" /> */}
      <div
        id={"narrative"}
        className="size-full py-15 bg-gradient-to-b from-blue-500 to-purple-50"
      ></div>
      {/* <TimeLineModel language={preferences.language} /> */}
      <NarrativeModel language={preferences.language} />
      <TechsListModel language={preferences.language} />
      <div
        id={"proyects"}
        className="size-full py-15 bg-gradient-to-b from-purple-300 to-teal-50"
      ></div>
      <ProyectsModule language={preferences.language} />
    </div>
  );
}
