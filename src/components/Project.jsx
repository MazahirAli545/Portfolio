import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Project({ project }) {
  const { title, description, img, techStack, github, link, featured } =
    project;

  return (
    <div className={`project ${featured ? "featured-project" : ""}`}>
      <a href={link ? link : github} target="_blank">
        <img src={`/${img}`} alt={title} />
      </a>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {techStack.map((tech) => {
            return <p key={tech}>{tech}</p>;
          })}
        </div>
        <div className="project-links ">
          {github && (
            <a
              className="project-link project-github"
              href={github}
              target="_blank"
            >
              Code <FaGithub />
            </a>
          )}
          {link && (
            <a className="project-link live-site" href={link} target="_blank">
              Live Demo <HiOutlineExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
