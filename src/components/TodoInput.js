import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import date from "date-and-time";
function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const inputref = useRef();
  const inputName = useRef();
  const pattern = date.compile("YYYY-MM-DD");

  //localstorage
  useEffect(() => {
    const temp = localStorage.getItem("name");
    const temp1 = localStorage.getItem("content");
    const loadedName = JSON.parse(temp);
    const pendingContent = JSON.parse(temp1);

    setName(loadedName);
    setContent(pendingContent);
  }, []);
  useEffect(() => {
    const temp = JSON.stringify(name);
    localStorage.setItem("name", temp);
    const temp1 = JSON.stringify(content);
    localStorage.setItem("content", temp1);
  }, [name, content]);

  useEffect(() => {
    if (!null) inputName.current.focus();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setContent(name);
    setName("");
    inputref.current.focus();
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuid(),
        text,
        completed: false,
        date: date.format(new Date(), pattern),
      })
    );
    setText("");
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className="mainContainer">
      <h1>..My To Do..</h1>
      {!content ? (
        <form onSubmit={handleForm}>
          <input
            className="profile"
            ref={inputName}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Please Enter your Name"
          />
        </form>
      ) : (
        <h4 className="welcome_name">What's up, {content}!</h4>
      )}
      <button className="deleteTodo" onClick={() => dispatch(deleteAllTodo())}>
        Clear Data
      </button>
      <input
        ref={inputref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        onKeyDown={handleKeypress}
      />
      <button disabled={text === "" || content === ""} onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
