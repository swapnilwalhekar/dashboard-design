// import React from 'react'

import {
  BsCart3,
  BsFillArchiveFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";

const Sidebar = ({ openSidebar, toggleSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebar ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" />
          SHOP
        </div>
        <span className="icon close-icon" onClick={toggleSidebar}>
          {" "}
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" />
            Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" />
            Peoples
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" />
            Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" />
            Inventeries
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" />
            Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" />
            Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
