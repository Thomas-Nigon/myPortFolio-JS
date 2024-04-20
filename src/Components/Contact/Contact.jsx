import "./Contact.scss";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function Contact() {
  const emailAddress = "nigont@gmail.com";
  const phoneNumber = "+33689326098";

  return (
    <section className="contact">
      <h1 className="contact--title">Me contacter</h1>
      <p>
        Je suis actuellement à la recherche d&apos;une alternance ou un stage
        sur la région Lilloise.
        <br />
        Vous pouvez me contacter via LinkedIn, mail ou téléphone, je serai ravi
        de m&apos;entretenir avec vous.
      </p>
      <ul>
        <li className="contact__list--item">
          <FaLinkedin className="contact--socialIcons" />
          <a
            className="contact--link"
            href="https://www.linkedin.com/in/thomas-nigon/"
          >
            Visiter mon profil
          </a>
        </li>
        <li className="contact__list--item">
          <MdOutlineMailOutline className="contact--socialIcons" />
          <a className="contact--link" href={`mailto:${emailAddress}`}>
            Envoyer un mail
          </a>
        </li>
        <li className="contact__list--item">
          <MdOutlineLocalPhone className="contact--socialIcons" />
          <a className="contact--link" href={`tel:${phoneNumber}`}>
            06 89 32 60 98
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
