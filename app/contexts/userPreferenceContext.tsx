"use client";
// Componentes de React

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

//Componentes propios
interface UserPreference {
  theme: "light" | "dark" | "system";
  language: "eng" | "esp";
  notification: boolean;
}
type UserPreferenceContextType = {
  preferences: UserPreference;
  setPreferences: Dispatch<SetStateAction<UserPreference>>;
  handlePreference: (preference: Partial<UserPreference>) => void;
};

export const UserPreferenceContext = createContext<UserPreferenceContextType>({
  preferences: { theme: "light", language: "esp", notification: false },
  setPreferences: () => {},
  handlePreference: () => {},
});

export const UPreferenceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] = useState<UserPreference>({
    theme: "light",
    language: "esp",
    notification: false,
  });
  const handlePreference = (preference: Partial<UserPreference>): void => {
    setPreferences((prev) => ({
      ...prev, // copiamos el estado anterior
      ...preference, // sobreescribimos solo las claves que vienen
    }));
  };

  // Renderizado
  return (
    <UserPreferenceContext.Provider
      value={{ preferences, setPreferences, handlePreference }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};
