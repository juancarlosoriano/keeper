import React from "react";

const Note = ({ id, title, content, onClick }) => {
  return (
    <div className="c-note">
      <h1 className="c-note__title">{title}</h1>
      <p className="c-note__content">{content}</p>
      <button onClick={() => onClick(id)} className="c-note__btn-delete">
        DELETE
      </button>
    </div>
  );
};

export default Note;
