import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { MenuProvider } from "./Contexts/MenuContext";
import "./app.scss";

function App() {
  return (
    <>
      <MenuProvider>
        <div className="main-container">
          <Header />
          <Outlet />
        </div>
      </MenuProvider>
    </>
  );
}

export default App;
