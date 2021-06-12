import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import date from "date-and-time";
import TodoItem from "./TodoItem";
import { clearTodo } from "../redux/actions";
function TodoList() {
  const dispatch = useDispatch();
  const pattern = date.compile("YYYY-MM-DD");
  const todos = useSelector((state) => state);
  const [status, setstatus] = useState("All");
  const [filtered, setfiltered] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    date.format(new Date(), pattern)
  );

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setfiltered(
            todos.filter((todo) => todo.completed && todo.date === selectedDate)
          );

          break;
        case "Notcompleted":
          setfiltered(
            todos.filter(
              (todo) => todo.completed === false && todo.date === selectedDate
            )
          );
          break;

        default:
          setfiltered(todos.filter((todo) => todo.date === selectedDate));
          break;
      }
    };
    filterHandler();
  }, [status, todos, selectedDate]);

  const dateHandler = (e) => {
    setSelectedDate(e.target.value);
  };

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
        onClick={() => {
          dispatch(clearTodo(selectedDate));
          setstatus("All");
          setSelectedDate(date.format(new Date(), pattern));
        }}
      >
        Clear Todo
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
      <input
        className="date"
        type="date"
        value={selectedDate}
        onChange={(e) => {
          dateHandler(e);
        }}
      />
    </div>
  );
}

export default TodoList;
