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

  return (
    <div className="mainContainer">
      <h1>Today's Task</h1>
      <p style={{ textAlign: "end", color: "black" }}>
        <em>Date: {newDate.toLocaleDateString()}</em>
      </p>
      <input
        ref={inputref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={text === ""}
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              text,
              completed: false,
            })
          );
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
