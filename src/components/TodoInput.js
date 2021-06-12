import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import date from "date-and-time";
function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const inputref = useRef();
  const pattern = date.compile("YYYY-MM-DD");

  useEffect(() => {
    inputref.current.focus();
  });

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuid(),
        text,
        completed: false,
        date: date.format(new Date(), pattern),
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

      <button className="deleteTodo" onClick={() => dispatch(deleteAllTodo())}>
        Clear Data
      </button>
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
