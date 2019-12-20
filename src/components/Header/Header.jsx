import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="header-link">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}
