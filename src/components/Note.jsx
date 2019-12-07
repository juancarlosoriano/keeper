import React from "react";

const Note = ({ title, content }) => {
  return (
    <div className="c-note">
      <h1 className="c-note__title">{title}</h1>
      <p className="c-note__content">{content}</p>
    </div>
  );
};

export default Note;
