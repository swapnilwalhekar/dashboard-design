// import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsJustify,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={toggleSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div>
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
