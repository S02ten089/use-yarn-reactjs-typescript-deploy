import { useState, useCallback } from "react";

export function useAdPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openAd = useCallback(() => setIsOpen(true), []);
  const closeAd = useCallback(() => setIsOpen(false), []);
  const toggleAd = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    openAd,
    closeAd,
    toggleAd,
  };
}