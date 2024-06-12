import { useState } from "react";
import "./task.css";

interface Props {
  task: {
    done: boolean;
    name: string;
  };
}

function Task({ task }: Props) {
  const [name, setName] = useState(task.name);

  function handleChange(e: any) {
    setName(e.target.value);
  }

  return (
    <div className="task_container">
      <input type="checkbox"></input>
      <input type="text" value={name} onChange={handleChange}></input>
    </div>
  );
}

export default Task;
