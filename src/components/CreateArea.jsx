import React, { useState } from "react";

function CreateArea(props) {
  const [formText, setFormText] = useState({
    title: "",
    content: ""
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setFormText(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form className="c-form">
        <input
          className="c-form__title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formText.title}
        />
        <textarea
          className="c-form__content"
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={formText.content}
        />
        <button
          className="c-form__btn"
          onClick={event => {
            event.preventDefault();
            props.onSubmit(formText);
            setFormText({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
