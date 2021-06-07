import React, { useState } from "react";

function TodoInput() {
  const [text, setText] = useState();
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </div>
  );
}

export default TodoInput;
