"use client";

import React, { createContext, useContext, useState } from 'react';
import { Sport, activeSport } from './sports';

interface SportContextType {
  selectedSport: Sport;
  setSelectedSport: (sport: Sport) => void;
}

const SportContext = createContext<SportContextType | undefined>(undefined);

export const SportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSport, setSelectedSport] = useState<Sport>(activeSport);
  return (
    <SportContext.Provider value={{ selectedSport, setSelectedSport }}>
      {children}
    </SportContext.Provider>
  );
};

export function useSport() {
  const ctx = useContext(SportContext);
  if (!ctx) throw new Error('useSport must be used within a SportProvider');
  return ctx;
}
