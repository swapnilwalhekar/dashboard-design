import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="grid-container">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
        <Home />
      </div>
    </>
  );
}

export default App;
