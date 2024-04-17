import "./welcome.scss";
// import frontpicdev from "../../assets/images/croppedHappyDev.png";
// import backdev from "../../assets/images/backdev.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import darkerbackdev from "../../assets/images/darkerbackdev.png";
function Welcome() {
  return (
    <>
      <main className="welcome">
        <section className="welcome__sideContainer">
          <h1 className="welcome__title">Bonjour !</h1>
          <h2 className="welcome__title">
            Je m&apos;appelle Thomas,
            <br />
            développeur web fullstack
          </h2>
          <p className="welcome--text">
            Fraichement diplomé de la <span className="welcome--accent">W</span>
            ild Code School <nbsp></nbsp> je maitrise: <nbsp></nbsp>
          </p>
          <ul className="welcome--skillList">
            <li>
              <span className="welcome--accent">R</span>eact<nbsp></nbsp>
            </li>
            <li>
              <span className="welcome--accent">N</span>ode.JS<nbsp></nbsp>
            </li>
            <li>
              <span className="welcome--accent">E</span>xpress.JS
            </li>
          </ul>
          <section className="welcome__socialContainer">
            <article className="welcome__socialContainer__iconsContainer">
              <FaLinkedin className="welcome--socialIcons" />
              <FaGithub className="welcome--socialIcons" />
            </article>
            <button className="welcome--button">
              Mes <span className="welcome--accent">P</span>rojets{" "}
            </button>
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
