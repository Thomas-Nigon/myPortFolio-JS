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
        <h1 className="welcome__title">Bonjour !</h1>
        <h2 className="welcome__title">
          Je m&apos;appelle <span className="welcome--accent">T</span>homas.
          <br /> Je suis développeur web fullstack
        </h2>
        <p className="welcome--text">
          Fraichement diplomé de la <span className="welcome--accent">W</span>
          ild <span className="welcome--accent">C</span>ode{" "}
          <span className="welcome--accent">S</span>chool <nbsp></nbsp> je
          maitrise <nbsp></nbsp>
          <span className="welcome--accent">R</span>eact, <nbsp></nbsp>
          <span className="welcome--accent">N</span>ode.JS et <nbsp></nbsp>
          <span className="welcome--accent">E</span>xpress.JS
        </p>
        <section className="welcome__socialContainer">
          <article className="welcome__socialContainer__iconsContainer">
            <FaLinkedin className="welcome--socialIcons" />
            <FaGithub className="welcome--socialIcons" />
          </article>
          <button className="welcome--button">
            Mes <span className="welcome--accent">P</span>rojets{" "}
          </button>
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
