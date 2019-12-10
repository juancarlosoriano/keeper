import React, { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

const App = () => {
  const state = useState(notes);
  const [notesCollection, setNotes] = state;

  const addNote = formText => {
    formText.title !== "" &&
      formText.content !== "" &&
      setNotes(prevState => [...prevState, formText]);
  };

  const deleteNote = index => {
    setNotes(prevState => {
      return prevState.filter((note, i) => {
        return i !== index;
      });
    });
  };

  return (
    <div className="c-App">
      <Header title="Keeper App Clone" />
      <CreateArea onSubmit={addNote} />
      {notesCollection.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
