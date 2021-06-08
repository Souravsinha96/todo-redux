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
    <div className="itemContainer">
      {editable ? (
        <input
          className="editInput"
          ref={inputref}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h4>{todo.text}</h4>
      )}
      <div>
        <button
          style={{
            borderRadius: "5px",
            backgroundColor: "blue",
            marginLeft: "5px",
          }}
          disabled={text === ""}
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
        <button
          style={{
            borderRadius: "5px",
            backgroundColor: "red",
            marginLeft: "5px",
          }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
