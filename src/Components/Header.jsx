import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import "../Components/Header.css";
const Header = function () {
  return (
    <header className="main_header">
      <div className="logo_icon">
        <LibraryBooksIcon className="icon_logo" />
        <h2 className="header_h1">LIB</h2>
      </div>
      <nav className="company_info">
        <ul className="nav_list">
          <li className="list_item">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
