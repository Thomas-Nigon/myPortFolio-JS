import "./About.scss";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import bagWork from "../../assets/images/bagwork2.png";

function About() {
  return (
    <main className="about">
      <section>
        <h1 className="about--title">A propos </h1>
        <p className="about__paragraph--me">
          Je m&apos;appelle Thomas, j&apos;ai 35 ans. Suite à un licenciement
          économique j&apos;ai décidé d&apos;entrer en reconversion
          professionnelle. Passionné d&apos;informatique depuis tout jeune, je
          me suis naturellement porté vers le développement pour poursuivre ma
          carrière.
        </p>
        <p>
          C&apos;est au cours de la Wild code school que j&apos;ai appris HTML,
          CSS, Javascript et React coté frontend.
        </p>
        <p>
          Puis, NodeJs Express, sql, Mysql pour le coté backend et base de
          données.
        </p>
        <p>
          J&apos;ai également eu la chance de travailler en équipe via Github
          sur différents projets que vous pourrez trouver plus
          <span className="accent"> bas</span>.
        </p>
        <section className="about__skills">
          <FaReact className="icons--dark" />
          <FaNode className="icons--dark" />
          <SiMysql className="icons--dark" />
        </section>
        <p className="about__p">
          Sur le plan personnel je suis pratiquant de sport de combat et
          particulièrement de Muay Thai.
        </p>
      </section>
      <img className="about--pics" src={bagWork} alt="" />
    </main>
  );
}

export default About;
