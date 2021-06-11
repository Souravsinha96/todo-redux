import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <footer className="footer">
        Made with <span style={{ color: "red" }}>❤ </span>by{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#125d98",
          }}
          href="https://github.com/Souravsinha96/todo-redux"
          target="_blank"
        >
          <strong>Sourav</strong>
        </a>
      </footer>
    </div>
  );
}

export default App;
