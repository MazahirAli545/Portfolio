import { IoIosClose } from "react-icons/io";

export default function NavMenu() {
  function handleClick() {
    document.getElementById("nav-menu").classList.add("menu-close");
  }

  function scrollToTop() {
    handleClick();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="nav-menu menu-close" id="nav-menu">
      <button className="close-button" onClick={handleClick}>
        <IoIosClose />
      </button>

      <ul className="nav-menu-list">
        <li onClick={scrollToTop}>Home</li>
        <a href="#about" onClick={handleClick}>
          <li>About</li>
        </a>
        <a href="#projects" onClick={handleClick}>
          <li>Projects</li>
        </a>
        <a href="#contact" onClick={handleClick}>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}
