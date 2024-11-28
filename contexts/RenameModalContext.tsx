"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const defaultValues = { id: 0, title: "" };

interface IRenameModal {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpen: (id: number, title: string) => void;
  onClose: () => void;
}

const RenameModalContext = createContext<IRenameModal | undefined>(undefined);

export const RenameModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] = useState(defaultValues);

  const onOpen = (id: number, title: string) => {
    setInitialValues({ id, title });
    setIsOpen(true);
  };

  const onClose = () => {
    setInitialValues(defaultValues);
    setIsOpen(false);
  };

  return (
    <RenameModalContext.Provider
      value={{ isOpen, initialValues, onOpen, onClose }}
    >
      {children}
    </RenameModalContext.Provider>
  );
};

export const useRenameModal = () => {
  const context = useContext(RenameModalContext);
  if (!context) {
    throw new Error("useRenameModal must be used within a RenameModalProvider");
  }
  return context;
};
