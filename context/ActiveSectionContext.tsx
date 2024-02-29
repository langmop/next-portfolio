"use client";
import React, { useState } from "react";
import { createContext } from "react";
import { links } from "@/lib/data";

type SectionType = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
  lastActiveSectionTime: Date;
  setLastActiveSectionTime: React.Dispatch<React.SetStateAction<Date>>;
} | null;
export const ActiveContext = createContext<ActiveSectionContextType>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionType>("Home");
  const [lastActiveSectionTime, setLastActiveSectionTime] = useState(
    new Date()
  );

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastActiveSectionTime,
        setLastActiveSectionTime,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export function useActiveContext() {
  const context = React.useContext(ActiveContext);
  if (context === null) {
    throw new Error(
      "useActiveContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;
