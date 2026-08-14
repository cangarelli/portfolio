"use client";
import { useContext, Context } from "react";
import { UserPreferenceContext } from "../contexts/userPreferenceContext";

function useContextSafeGetter<T>(ctx: Context<T | undefined>): T {
  const value = useContext(ctx);
  if (!value) {
    throw new Error(
      "use context getter debe usarse dentro del contexto del proveedor",
    );
  }
  return value;
}
export default useContextSafeGetter;
