import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "./header.scss";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  /*   const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }; */
  const open = () => {
    setIsOpen("menu--open");
    console.log(isOpen);
  };
  const close = () => {
    setIsOpen("menu--close");
    console.log(isOpen);
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <span className="header--accent">T</span>homas
        </h1>
        {isOpen ? (
          <IoClose className="header__menuButton--close" onClick={close} />
        ) : (
          <FaBars className="header__menuButton--open" onClick={open} />
        )}
      </header>
    </>
  );
}

export default Header;
