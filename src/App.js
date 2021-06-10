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
        <strong>Sourav</strong>
      </footer>
    </div>
  );
}

export default App;
