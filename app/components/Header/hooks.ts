import { useState } from "react";

export const useOpen = (defaultValue = false) => {
  const [open, setIsOpen] = useState(defaultValue);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((state) => !state);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
    setIsOpen,
  };
};
