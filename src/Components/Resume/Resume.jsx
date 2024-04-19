import "./Resume.scss";
import Cv from "../../assets/images/CV.png";
import CvMot from "../../assets/images/CV_motivationnel_V2.png";
function Resume() {
  return (
    <main className="resume">
      <h1 className="resume--title">Mon CV</h1>
      <section className="resume__container">
        <img className="resume--CV" src={Cv} alt="Mon CV" />
        <img className="resume--CV" src={CvMot} alt="Mon CV motivationnel" />
      </section>
    </main>
  );
}

export default Resume;
