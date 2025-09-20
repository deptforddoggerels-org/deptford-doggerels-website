"use client";

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type ModalContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
