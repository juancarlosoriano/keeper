import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = ({ id, title, content, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className="c-note">
      <h1 className="c-note__title">{title}</h1>
      <p className="c-note__content">{content}</p>
      <button onClick={handleClick} className="c-note__btn-delete">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
