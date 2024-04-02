import "./menu.scss";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";

function Menu() {
  const { isOpen } = useContext(MenuContext);
  return (
    <section className={isOpen ? "menu menu--open" : "menu menu--close"}>
      <ul className="menu__list">
        <li className="menu__item">Welcome</li>
        <li className="menu__item">About</li>
        <li className="menu__item">Projects</li>
        <li className="menu__item">Resume</li>
        <li className="menu__item">Contact</li>
      </ul>
    </section>
  );
}

export default Menu;
