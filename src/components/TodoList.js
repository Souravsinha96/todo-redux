import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../redux/actions";
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [status, setstatus] = useState("All");
  const [filtered, setfiltered] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setfiltered(todos.filter((todo) => todo.completed));

          break;
        case "Notcompleted":
          setfiltered(todos.filter((todo) => todo.completed === false));
          break;

        default:
          setfiltered(todos);
          break;
      }
    };
    filterHandler();
  }, [status, todos]);

  return (
    <div className="listContainer">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button
        style={{
          borderRadius: "5px",
          backgroundColor: "#f54748",
          marginLeft: "5px",
          marginTop: "20px",
        }}
        disabled={todos.length === 0}
        onClick={() => dispatch(clearTodo())}
      >
        Clear All
      </button>

      <select
        className="dropdown"
        value={status}
        onChange={(e) => setstatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed ✅</option>
        <option value="Notcompleted">Not-completed❗</option>
      </select>
    </div>
  );
}

export default TodoList;
