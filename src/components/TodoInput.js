import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputref = useRef();
  useEffect(() => {
    inputref.current.focus();
  });
  return (
    <div>
      <h1>Todays Task</h1>
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
            })
          );
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
