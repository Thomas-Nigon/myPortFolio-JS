import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Menu from "../../Components/Menu/Menu";
import Projects from "../../Components/Projects/Projects";
import Resume from "../../Components/Resume/Resume";
import Welcome from "../../Components/Welcome/Welcome";
import "./home.scss";

function Home() {
  return (
    <>
      <main className="home">
        <Menu />
        <Welcome />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default Home;
