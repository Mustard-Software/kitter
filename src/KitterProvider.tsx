'use client';

import React, { createContext, useContext } from 'react';
import type { KitterConfig } from './kitter.config';

const KitterContext = createContext<KitterConfig | undefined>(undefined);

export const KitterProvider = ({
  config,
  children,
}: {
  config: KitterConfig;
  children: React.ReactNode;
}) => {
  return (
    <KitterContext.Provider value={config}>{children}</KitterContext.Provider>
  );
};

export const useKitterConfig = (): KitterConfig => {
  const ctx = useContext(KitterContext);
  if (!ctx) {
    throw new Error('useKitterConfig must be used inside a <KitterProvider>.');
  }
  return ctx;
};
