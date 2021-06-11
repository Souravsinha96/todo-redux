import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const inputref = useRef();
  useEffect(() => {
    inputref.current.focus();
  });
  const newDate = new Date();

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuid(),
        text,
        completed: false,
      })
    );
    setText("");
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className="mainContainer">
      <h1>..ToDo List..</h1>
      <p style={{ textAlign: "end", marginTop: "30px", fontWeight: "700" }}>
        Date:- {newDate.toLocaleDateString()}
      </p>
      <input
        ref={inputref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        onKeyDown={handleKeypress}
      />
      <button disabled={text === ""} onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
