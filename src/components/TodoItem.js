import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "../redux/actions";
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
        <div>
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => dispatch(completeTodo(todo.id))}
          />
          <h4
            style={{
              textDecorationLine: todo.completed ? "line-through" : undefined,
              textDecorationThickness: "5px",
              textDecorationColor: "purple",
            }}
          >
            {todo.text}
          </h4>
        </div>
      )}
      <div>
        <button
          style={{
            borderRadius: "5px",
            backgroundColor: "blue",
            marginLeft: "5px",
          }}
          disabled={text === "" || todo.completed === true}
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
