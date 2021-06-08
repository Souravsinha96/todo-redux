import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../redux/actions";
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  return (
    <div className="listContainer">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button
        style={{
          borderRadius: "5px",
          backgroundColor: "red",
          marginLeft: "5px",
        }}
        disabled={todos.length === 0}
        onClick={() => dispatch(clearTodo())}
      >
        Clear All
      </button>
    </div>
  );
}

export default TodoList;
