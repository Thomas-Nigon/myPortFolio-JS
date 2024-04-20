import "./menu.scss";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { Link } from "react-scroll";

function Menu() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const handleClick = () => {
    setIsOpen("menu--close");
  };
  return (
    <section className={`menu ${isOpen}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="header" smooth={true} duration={500} onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li className="menu__item">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            A propos
          </Link>
        </li>

        <li className="menu__item">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            Mes projets
          </Link>
        </li>
        <li className="menu__item">
          <Link to="resume" smooth={true} duration={500} onClick={handleClick}>
            Mes CVs
          </Link>
        </li>
        <li className="menu__item">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Me contacter
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
