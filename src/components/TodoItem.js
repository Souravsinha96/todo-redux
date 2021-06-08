import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{todo.text}</h4>
      <button>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
