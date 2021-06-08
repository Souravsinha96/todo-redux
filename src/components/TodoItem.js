import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actions";
function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();
  const inputref = useRef();
  useEffect(() => {
    if (editable !== false) inputref.current.focus();
  }, [editable]);
  return (
    <div>
      {editable ? (
        <input
          ref={inputref}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h4>{todo.text}</h4>
      )}
      <button
        onClick={() => {
          dispatch(
            editTodo({
              ...todo,
              text,
            })
          );

          setEditable(!editable);
        }}
      >
        {editable ? "Done" : "Edit"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
