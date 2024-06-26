import "./SingleProjectCard.scss";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";

function SingleProjectCard({ project }) {
  console.log(project.secondPic);

  return (
    <article className={`singleProject ${project.flex}`}>
      <img
        className={`${project.direction}`}
        src={`${project.img}`}
        alt={project.alt}
      />
      <img
        className={`${project.direction}`}
        src={`${project.secondPic}`}
        alt={project.alt2}
      />

      <div className="singleProject__description">
        <h2>{project.title}</h2>
        <p className="singleProject__description--paragraph">{project.short}</p>
        <p className="singleProject__description--paragraph">
          {project.description}
        </p>

        <a
          className="singleProject__description--link"
          href={project.link}
          target="_blank"
        >
          Voir le code
          <FaGithub className="singleProject--socialIcons" />
        </a>
        {project.play ? (
          <a
            className="singleProject__description--link"
            href={project.play}
            target="_blank"
          >
            Live Demo
            <FaPlayCircle className="singleProject--socialIcons" />
          </a>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

SingleProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    secondPic: PropTypes.string,
    direction: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    alt2: PropTypes.string,
    flex: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    play: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProjectCard;
