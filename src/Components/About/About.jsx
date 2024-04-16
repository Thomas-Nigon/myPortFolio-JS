import "./About.scss";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import bagWork from "../../assets/images/bagwork.jpg";

function About() {
  return (
    <main className="about">
      <h1 className="about--title">A propos </h1>
      <p className="about__paragraph--me">
        Je m&apos;appelle Thomas, j&apos;ai 35 ans. Suite à un licenciement
        économique j&apos;ai décidé d&apos;entrer en reconversion
        professionnelle. Passionné d&apos;informatique depuis tout jeune, je me
        suis naturellement porté vers le développement pour poursuivre ma
        carrière.
      </p>
      <p>
        C&apos;est au cours de la Wild code school que j&apos;ai appris HTML,
        CSS, Javascript et React coté frontend.
      </p>
      <p>
        Puis NodeJs Express, sql, Mysql pour le coté backend et base de données.
      </p>
      <p>
        J&apos;ai également eu la chance de travailler en equipe via Github sur
        différents projets.
      </p>
      {/*       <section className="about__paraph--skills">
        <h2 className="about--h2">Frontend</h2>
        <p className="about--p">Je maitrise HTML, CSS, Javascript et React.</p>
        <h2 className="about--h2">Backend</h2>
        <p className="about--p">Je maitrise NodeJs, ExpressJS.</p>
        <h2 className="about--h2">Base de données</h2>
        <p className="about--p">Je maitrise sql et mySql.</p>
      </section> */}
      <section className="about__skills">
        <FaReact className="icons--dark" />
        <FaNode className="icons--dark" />
        <SiMysql className="icons--dark" />
      </section>
      <p className="about__p">
        Sur le plan personnel je suis fan de sport de combat et particulièrement
        de Muay Thai.
      </p>
      <img className="about--pics" src={bagWork} alt="" />
    </main>
  );
}

export default About;
