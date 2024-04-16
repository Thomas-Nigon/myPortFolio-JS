import About from "../../Components/About/About";
import Menu from "../../Components/Menu/Menu";
import Welcome from "../../Components/Welcome/Welcome";
import "./home.scss";

function Home() {
  return (
    <>
      <main className="home">
        <Menu />
        <Welcome />
        <About />
      </main>
    </>
  );
}

export default Home;
