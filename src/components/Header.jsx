import React from "react";

const Header = ({ title }) => {
  return (
    <header className="c-header">
      <h1 className="c-header__text">{title}</h1>
    </header>
  );
};

export default Header;
