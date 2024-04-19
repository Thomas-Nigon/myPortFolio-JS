import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState("");
  const stateButton = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen, setIsOpen]
  );

  return (
    <MenuContext.Provider value={stateButton}>{children}</MenuContext.Provider>
  );
}
MenuProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
