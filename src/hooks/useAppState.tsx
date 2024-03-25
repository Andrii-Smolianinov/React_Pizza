import React, { createContext, useContext } from "react";

export type AppContextProps = {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean | null>>;
  setShowButtonCart: React.Dispatch<React.SetStateAction<boolean | null>>;
  isEmptyCart: boolean;
  pizzasPerPage: number;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function useAppState() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
}
