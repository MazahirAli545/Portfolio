import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  function handleClick() {
    document.getElementById("nav-menu").classList.remove("menu-close");
  }

  function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="header">
      <p className="logo" onClick={scrollToTop}>
        Mazahir Ali
      </p>
      <button className="hamburger" onClick={handleClick}>
        <RxHamburgerMenu />
      </button>
      <ul className="nav-list">
        <li onClick={scrollToTop}>Home</li>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}
