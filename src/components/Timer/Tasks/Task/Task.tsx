import React, { useState } from "react";
import "./task.css";

interface Props {
  task: {
    done: boolean;
    name: string;
  };
}

function Task({ task }: Props) {
  const [name, setName] = useState(task.name);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="task_container">
      <input
        type="checkbox"
        checked={task.done ? "checked" : "unchecked"}
      ></input>
      <input type="text" value={name} onChange={handleChange}></input>
    </div>
  );
}

export default Task;
