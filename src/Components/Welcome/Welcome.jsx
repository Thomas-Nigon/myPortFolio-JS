import "./welcome.scss";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";

import darkerbackdev from "../../assets/images/darkerbackdev.png";
function Welcome() {
  return (
    <>
      <main className="welcome">
        <section className="welcome__sideContainer">
          <h1 className="welcome__title">
            <span className="accent">B</span>onjour !
          </h1>
          <h2 className="welcome__title">
            Je m&apos;appelle Thomas,
            <br />
            développeur web fullstack
          </h2>
          <p className="welcome--text">
            Fraichement diplomé de la <span className="welcome--accent">W</span>
            ild Code School je maitrise:
          </p>
          <ul className="welcome--skillList">
            <li>
              <span className="welcome--accent">R</span>eact
            </li>
            <li>
              <span className="welcome--accent">N</span>ode.JS
            </li>
            <li>
              <span className="welcome--accent">E</span>xpress.JS
            </li>
          </ul>
          <section className="welcome__socialContainer">
            <article className="welcome__socialContainer__iconsContainer">
              <a
                className="welcome--links"
                href="https://www.linkedin.com/in/thomas-nigon/"
              >
                <FaLinkedin className="welcome--socialIcons" />
              </a>
              <a
                className="welcome--links"
                href="https://github.com/Thomas-Nigon"
              >
                <FaGithub className="welcome--socialIcons" />
              </a>
            </article>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="welcome--button"
            >
              <span className="accent">D</span>écouvrez mes projets
            </Link>
          </section>
        </section>
        <img
          className="welcome--pics"
          src={darkerbackdev}
          alt="an happy developper coding"
        />
      </main>
    </>
  );
}

export default Welcome;
