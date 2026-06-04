import { useState } from 'react';

export interface PopupContent {
  title: string;
  body: string;
}

export interface UsePopupReturn {
  isOpen: boolean;
  content: PopupContent | null;
  openPopup: (content: PopupContent) => void;
  closePopup: () => void;
}

export function usePopup(): UsePopupReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<PopupContent | null>(null);

  const openPopup = (newContent: PopupContent) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    // Delay clearing content to allow animation to finish
    setTimeout(() => setContent(null), 300);
  };

  return { isOpen, content, openPopup, closePopup };
}
