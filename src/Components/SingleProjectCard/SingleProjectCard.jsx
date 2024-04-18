import "./SingleProjectCard.scss";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa6";

function SingleProjectCard({ project }) {
  console.log("test");
  console.log("inside card", project);
  return (
    <article className="projects__singleProject">
      <img
        className="projects__singleProject--thumbnail"
        src={`${project.img}`}
        alt={project.alt}
      />
      {project.img2 && (
        <img
          className="projects__singleProject--thumbnail"
          src={`${project.img2}`}
          alt={project.alt2}
        />
      )}
      <div className="projects__singleProject--description">
        <h2>{project.title}</h2>
        <p>{project.short}</p>
        <p>{project.description}</p>
        <button className="projects__singleProject--description--button">
          Voir le code <FaGithub className="projects--socialIcons" />
        </button>
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
    img2: PropTypes.string,
    alt: PropTypes.string.isRequired,
    alt2: PropTypes.string,
  }).isRequired,
};

export default SingleProjectCard;
