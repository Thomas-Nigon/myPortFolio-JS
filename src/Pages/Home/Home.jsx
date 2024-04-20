import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Projects from "../../Components/Projects/Projects";
import Resume from "../../Components/Resume/Resume";
import Welcome from "../../Components/Welcome/Welcome";
import "./home.scss";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";

function Home() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const handleClick = () => {
    {
      isOpen === "neutral" ? "" : setIsOpen("menu--close");
    }
  };
  return (
    <>
      <main className="home" onClick={handleClick}>
        <Menu />
        <Welcome />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
