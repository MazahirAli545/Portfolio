import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Profile() {
  return (
    <div className="profile" id="profile">
      <div className="section1">
        <div className="heading">
          <h1>React Native Developer 👋🏻</h1>
          <p>
            Hi, I&apos;m Mazahir Ali. A passionate React Native Developer with
            expertise in cross-platform mobile app development and web
            applications. 📍
          </p>
          <div className="button-group">
            <a
              className="icon github-icon"
              href="https://github.com/MazahirAli545"
              target="_blank"
            >
              <FiGithub />
            </a>
            <a
              className="icon linkedin-icon"
              href="https://www.linkedin.com/in/mazahir-ali-118684284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <TbBrandLinkedin />
            </a>
          </div>
        </div>
        <img
          className="profile-pic"
          src="/IMG_9663.JPG"
          alt="Mazahir Ali - React Native Developer"
        />
      </div>
      <div className="section2">
        <p>Tech Stack</p>
        <div className="tech-icons">
          <img src="/icons/react.svg" alt="react" />
          <img src="/icons/javascript.svg" alt="javascript" />
          <img src="/icons/typescript.svg" alt="typescript" />
          <img src="/icons/node.svg" alt="node" />
          <img src="/icons/express.svg" alt="express" />
          <img src="/icons/mongodb.svg" alt="mongodb" />
          <img src="/icons/html.svg" alt="html" />
          <img src="/icons/css.svg" alt="css" />
          <img src="/icons/tailwind.svg" alt="tailwind" />
          <img src="/icons/cursor.svg" alt="cursor ai" />
        </div>
      </div>
    </div>
  );
}
