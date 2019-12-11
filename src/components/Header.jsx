import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

const Header = ({ title }) => {
  return (
    <header className="c-header">
      <h1 className="c-header__text">
        <HighlightIcon />
        {title}
      </h1>
    </header>
  );
};

export default Header;
