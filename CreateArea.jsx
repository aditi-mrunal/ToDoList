import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function textChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function submit(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={textChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={textChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
