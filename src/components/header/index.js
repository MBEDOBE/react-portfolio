import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/index";
import Web from "./web/index";
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <span>mbedobe.</span>
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {/* <img src="/apps.svg" alt="" /> */}
            <i className="ti ti-apps"></i>
            {/* <i className="fi fi-rr-apps-add"></i> */}
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
