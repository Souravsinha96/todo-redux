import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../redux/actions";
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button
        disabled={todos.length === 0}
        onClick={() => dispatch(clearTodo())}
      >
        Clear All
      </button>
    </div>
  );
}

export default TodoList;
