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

  const handleSubmit = () => {
    dispatch(
      editTodo({
        ...todo,
        text,
      })
    );

    setEditable(!editable);
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className="itemContainer">
      {editable ? (
        <input
          placeholder="Edit a Todo"
          className="editInput"
          ref={inputref}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeypress}
        />
      ) : (
        <div>
          <li
            className="heading"
            onClick={() => dispatch(completeTodo(todo.id))}
            style={{
              textDecorationLine: todo.completed ? "line-through" : undefined,
              opacity: todo.completed ? 0.5 : 1,
            }}
          >
            {todo.text}
          </li>
        </div>
      )}
      <div>
        <button
          className="update"
          disabled={text === "" || todo.completed === true}
          onClick={handleSubmit}
        >
          {editable ? "✔" : "📝"}
        </button>
        <button
          className="delete"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
