import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [formText, setFormText] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormText(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="c-form">
        {isExpanded && (
          <input
            className="c-form__title"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={formText.title}
          />
        )}
        <textarea
          className="c-form__content"
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          value={formText.content}
          onClick={expand}
        />
        {isExpanded && (
          <Zoom in={true}>
            <Fab
              className="c-form__btn"
              onClick={event => {
                event.preventDefault();
                props.onSubmit(formText);
                setFormText({
                  title: "",
                  content: ""
                });
                setExpanded(false);
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
