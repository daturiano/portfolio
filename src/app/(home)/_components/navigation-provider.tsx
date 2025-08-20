"use client";
import React, { createContext, useContext, useState } from "react";

type NavigationContextType = {
  tab: string;
  setTab: (args: Tab) => void;
};

export type Tab = "Home" | "About" | "Projects" | "Contact" | "Education";

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>("Home");

  return (
    <NavigationContext.Provider value={{ tab, setTab }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigation must be used within the NavigationContextProvider",
    );
  }
  return context;
};
