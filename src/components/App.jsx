import React from "react";
import "../styles/App.scss";

const Header = () => {
  return <header className="c-header"></header>;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-footer">
      <p className="c-footer__copyright-text">Copyright {currentYear}.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="c-App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
