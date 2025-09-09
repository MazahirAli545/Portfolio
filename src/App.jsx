import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
