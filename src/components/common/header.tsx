import * as React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="mainDivHeader">
      <div className="displayFlex">
        <div className="menuItem">
          <Link to="/home" className="linkStyle">
            Home
          </Link>
        </div>
        <div className="menuItem">
          <Link to="/folders" className="linkStyle">
            Folders
          </Link>
        </div>
      </div>

      <div className="menuItem">Profile</div>
    </div>
  );
};
