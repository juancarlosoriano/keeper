import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  return (
    <div className="c-App">
      <Header />
      <Note title="Test title" content="Test content." />
      <Footer />
    </div>
  );
};

export default App;
