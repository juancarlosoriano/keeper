import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-footer">
      <p className="c-footer__copyright-text">Copyright {currentYear}.</p>
    </footer>
  );
};

export default Footer;
