import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "./header.scss";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <span className="header--accent">T</span>homas
        </h1>
        {isOpen ? (
          <IoClose
            className="header__menuButton--close"
            onClick={handleClick}
          />
        ) : (
          <FaBars className="header__menuButton--open" onClick={handleClick} />
        )}
      </header>
    </>
  );
}

export default Header;
